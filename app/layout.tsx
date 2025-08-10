import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react" // ← add this import
import "./globals.css"

export const metadata: Metadata = {
  title: "Company ABC",
  description: "Lorem ipsum dolor sit amet.",
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
