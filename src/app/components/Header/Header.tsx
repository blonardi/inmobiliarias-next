

const Header = () => {
	return (
	<header className=" my-8 w-[90%] mx-auto overflow-hidden max-w-screen-xl text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-emerald-700 rounded-xl transition-all">
	  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
	      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
	        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
	      </svg>
	      <span className="ml-3 text-xl">Tailblocks</span>
	    </a>
	    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
	      

				<input type="checkbox" id="menu" className="peer hidden"/>
				<label htmlFor="menu" className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer text-white hover:text-white peer-checked:bg-close-menu font-bold">X
				</label>
				<div className="translate-x-full peer-checked:translate-x-0 transition-transform">
					<a className="mr-5 hover:text-white">First Link</a>
		      <a className="mr-5 hover:text-white">Second Link</a>
		      <a className="mr-5 hover:text-white">Third Link</a>
		      <a className="mr-5 hover:text-white">Fourth Link</a>
				</div>
	    </nav>
	    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Log in
	      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
	        <path d="M5 12h14M12 5l7 7-7 7"></path>
	      </svg>
	    </button>
	  </div>
	</header>
	)
}

export default Header