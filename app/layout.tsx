import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

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
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
