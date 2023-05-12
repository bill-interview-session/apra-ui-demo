'use client'

import AppLayout from '@components/AppLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@libs/registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <AppLayout>{children}</AppLayout>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
