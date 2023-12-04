const Hero = () => {
	return (
		<div className='flex justify-center items-center my-auto bg-background bg-cover bg-center h-full overflow-hidden'>
			<div className="text-center flex flex-col items-center justify-center mb-36">
				<h1 className="text-6xl font-semibold text-paragraph">INMOBILIARIAS LRQ 🏠</h1>
				<p className="text-3xl font-light mt-4 font-semibold text-secondary ">Lands of opportunities🌻 👪</p>
				<button 
				className="my-6 px-5 py-2 inline-block font-semibold bg-transparentborder border hover:bg-tertiary bg-button transition-all text-main rounded"
				>Vamos a buscar!</button>
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