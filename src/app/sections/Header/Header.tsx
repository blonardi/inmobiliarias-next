import Hero from "./Hero"
const Header = () => {
	return (
	<header className="header bg-violet-300 bg-hero-bg-small w-full mx-auto overflow-hidden text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-slate-600  
	transition-all z-50">
		<Hero />
	</header>
	)
}

export default Header