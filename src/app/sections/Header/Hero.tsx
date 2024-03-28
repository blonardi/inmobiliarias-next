import Link from 'next/link'
import Nav from './Nav'
import { cn } from "@/lib/utils"
import { buttonVariants } from '@/components/ui/button'



const Hero = () => {
	return (
		<div className='bg-hero-bg-small md:bg-hero-bg relative flex justify-center items-center my-auto md:bg-cover bg-center bg-no-repeat bg-contain h-screen overflow-hidden'>
			<Nav />

			<div className="backdrop-blur-sm bg-white/30 absolute p-4 rounded-lg text-center flex flex-col items-center justify-start md:ml-[28rem]">
				<h1 className="text-6xl font-semibold text-lime-800">kumpel</h1>
				<p className="text-3xl font-light text-start mt-4 text-lime-600 ">inmuebles</p>
				<Link href={'#houses'} className={cn(buttonVariants({variant:"custom", size:"lg"}))}
				>Vamos a buscar!</Link>
			</div>
		</div>
	)
}

export default Hero

// Elements
// Background #004643
// Button #f9bc60
// Headline #fffffe
// Paragraph #abd1c6

// Illustration
// Stroke #001e1d
// Secondary #abd1c6
// Main #e8e4e6
// Tertiary #e16162
// Highlights #f9bc60