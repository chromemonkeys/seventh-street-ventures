"use client"

import { useRef, useState, useCallback } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function AmbientMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const initialized = useRef(false)

  const init = useCallback(() => {
    if (initialized.current) return
    initialized.current = true

    const ctx = new AudioContext()
    const audio = new Audio("/ambient.mp3")
    audio.loop = true
    audio.crossOrigin = "anonymous"

    const source = ctx.createMediaElementSource(audio)

    // Convolver for reverb/echo
    const convolver = ctx.createConvolver()
    const rate = ctx.sampleRate
    const length = rate * 6 // 6 second reverb tail
    const impulse = ctx.createBuffer(2, length, rate)
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel)
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5)
      }
    }
    convolver.buffer = impulse

    // Mix dry + wet signals
    const dry = ctx.createGain()
    const wet = ctx.createGain()
    dry.gain.value = 0.35
    wet.gain.value = 0.65

    const master = ctx.createGain()
    master.gain.value = 0.68

    source.connect(dry).connect(master)
    source.connect(convolver).connect(wet).connect(master)
    master.connect(ctx.destination)

    audioRef.current = audio
    ctxRef.current = ctx
  }, [])

  const toggle = useCallback(() => {
    init()
    const audio = audioRef.current
    const ctx = ctxRef.current
    if (!audio || !ctx) return

    if (isPlaying) {
      audio.pause()
    } else {
      ctx.resume()
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying, init])

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-black/70 transition-all duration-300"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
