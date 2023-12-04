

const Header = () => {
	return (
	<header className=" my-8 w-[90%] mx-auto overflow-hidden max-w-screen-xl text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-emerald-700 rounded-xl transition-all">
    <nav className="p-6 md:flex md:flex-wrap md:items-center md:justify-between text-base">

			<div className="flex flex-row items-center justify-between">
	    	<a className="flex title-font font-medium my-auto mx-0 items-center text-white mb-4 md:mb-0">
	      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
	        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
	      </svg>
				{/* <img src="../imgs/kumpel_logo.jpg" alt="Logo Kumpel" /> */}
	      <span className="ml-3 text-xl">Tailblocks</span>
	    	</a>
			</div>

			<div className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
				<a className="mr-5 hover:text-white">Inicio</a>
	      <a className="mr-5 hover:text-white">Inmuebles</a>
	      <a className="mr-5 hover:text-white">Nosotros</a>
	      <a className="mr-5 hover:text-white">Contacto</a>

				<button className=" py-2 px-2 border border-white rounded-md font-bold text-white">Log In</button>
			</div>
	   </nav>
			
	</header>
	)
}

export default Header