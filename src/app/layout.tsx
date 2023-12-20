import React from 'react'
import type { Metadata } from 'next'
//import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// const roboto = Roboto({ subsets: ['latin'] })

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
      <body className='min-h-screen bg-slate-100'>
					<Header/>
					<main>{children}</main>
					<Footer/>
			</body>
    </html>
  )
}
