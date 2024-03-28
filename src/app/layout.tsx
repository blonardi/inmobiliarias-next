import React from 'react'
import type { Metadata } from 'next'
//import { Roboto } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'
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
				<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
				<link rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>"
					sizes="<generated>" /> 
				</head>
	      <body className='min-h-screen relative bg-slate-100'>
					<Providers>
						<main>{children}</main>
						<Footer/>
					</Providers>
				</body>
	    </html>
  )
}
