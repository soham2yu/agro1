import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geistSans = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "AgroLink X - Farm to Table Supply Chain",
  description: "Smart agricultural data and supply chain platform with blockchain traceability",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
