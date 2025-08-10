import type React from "react"

interface SlideProps {
  children: React.ReactNode
  className?: string
}

export default function Slide({ children, className }: SlideProps) {
  return (
    <div className={`flex min-h-screen w-full items-center justify-center overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
