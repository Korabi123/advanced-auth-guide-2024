import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '🔐 Auth',
  description: 'NextAuth v5 Advanced 2024',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
