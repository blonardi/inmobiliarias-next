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
      <body className='container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4'>
			<header className='py-8 flex justify-center items-center bg-slate-700 text-yellow-500'>HEADER INMOBILIARIA 😆</header>
			<main className='py-8'>{children}</main>
			<footer className='py-8 flex justify-center items-center bg-slate-700 text-yellow-500'>FOOTER INMOBILIARIA 😆</footer>
			</body>
    </html>
  )
}
