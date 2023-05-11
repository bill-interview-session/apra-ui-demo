import AppLayout from '@components/AppLayout'
import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@libs/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo App',
  description: 'Build a search application that searches on a collection of photo data and display the result in a table format to a user',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
