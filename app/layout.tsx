import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react" // ← add this import
import "./globals.css"

export const metadata: Metadata = {
  title: "Chris Milner | Seventh Street Ventures CTO Application",
  description: "You said don't send a generic CV. So I built this instead.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics removed */}
      </body>
    </html>
  )
}
