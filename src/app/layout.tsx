import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/app/navigation/navigation"
import { Footer } from "@/app/footer/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-poppins", // custom CSS variable
  display: "swap",
})

export const metadata: Metadata = {
  title: "Paul Adrian Godes | Full-Stack Web Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: ["developer", "portfolio", "React", "Next.js", "full-stack", "web development"],
  authors: [{ name: "Paul Adrian Godes" }],
  openGraph: {
    title: "Paul Adrian Godes | Full-Stack Web Developer",
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
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
