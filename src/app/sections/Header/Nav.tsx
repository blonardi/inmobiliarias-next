import logoKumpel from '@/assets/imgs/kumpel_logo.jpeg'
import Image from 'next/image'
import Link from 'next/link'
export default function Nav() {
	return (
		<>
			<nav className="p-6 md:flex md:flex-wrap md:items-center md:justify-between text-base absolute top-0 lg:flex lg:justify-between lg:w-full">
				<div className="flex flex-row items-center justify-between">
					<Link href='/' className="flex title-font font-medium my-auto mx-0 items-center text-white md:mb-4 lg:mb-0">

						<Image width={48} height={48} src={logoKumpel} className='rounded-full' alt="Logo Kumpel" />
						<span className="ml-3 text-2xl text-slate-500">Kumpel Inmuebles</span>
					</Link>
				</div>

				<div className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
					<Link href='/' className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Inicio</Link>
					<Link href='#houses' className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Inmuebles</Link>
					<Link href='/' className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Nosotros</Link>
					<Link href='/' className="mr-5 text-slate-500 hover:text-lime-700 hover:cursor-pointer">Contacto</Link>
				</div>
			</nav>
		</>
	)
}