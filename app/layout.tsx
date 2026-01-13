import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import LoadingScreen from "@/components/loading-screen"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Car Junction LLC - Quality Used Cars & Trucks in Dallas, TX",
  description:
    "Find your perfect used car at Car Junction LLC. Professional car dealership in Dallas, TX with wide selection of quality vehicles at unbeatable prices.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} font-sans antialiased`}>
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
