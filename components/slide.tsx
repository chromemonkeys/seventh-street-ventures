import type React from "react"

interface SlideProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function Slide({ children, className, style }: SlideProps) {
  return (
    <div className={`flex w-full items-center justify-center overflow-hidden ${className}`} style={{ height: "100dvh", ...style }}>
      {children}
    </div>
  )
}
