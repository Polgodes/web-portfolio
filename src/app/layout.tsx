import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Developer - Full-Stack Developer Portfolio",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: ["developer", "portfolio", "React", "Next.js", "full-stack", "web development"],
  authors: [{ name: "John Developer" }],
  openGraph: {
    title: "John Developer - Full-Stack Developer Portfolio",
    description: "Full-stack developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
