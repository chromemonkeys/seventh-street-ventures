import type React from "react"

interface SlideProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Slide({ children, className, style }: SlideProps) {
  return (
    <div className={`flex min-h-screen w-full items-center justify-center overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  )
}
