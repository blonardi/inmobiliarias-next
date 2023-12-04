import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inmobiliarias Larroque',
  description: 'Web de inmobiliarias en Larroque, Irazusta, Carbo',
	keywords: ['casas', 'terrenos','lotes','campos','larroque','carbo','irazusta']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='m-auto grid grid-rows-[auto,1fr,auto] min-h-screen bg-background'>
					<main>{children}</main>
			</body>
    </html>
  )
}
