import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import { AIChatbot } from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MediLog - Medical Interaction Logging",
  description: "AI-powered platform for logging and managing medical interactions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {children}
            <AIChatbot />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

