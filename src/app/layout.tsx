import React from 'react'
import type { Metadata } from 'next'
//import { Roboto } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer/Footer'
import {Providers} from "./providers";
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
					<Providers>
						<main>{children}</main>
						<Footer/>
					</Providers>
				</body>
	    </html>
  )
}
