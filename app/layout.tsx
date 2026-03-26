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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w1j6ur3a2n");`,
          }}
        />
      </head>
      <body>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
