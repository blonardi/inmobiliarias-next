

const Filter = () => {
	return (
	<div className=" my-8 w-[90%] mx-auto overflow-hidden max-w-screen-xl text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-emerald-700 rounded-xl transition-all flex flex-col justify-center items-center">
		<div><h3 className="text-2xl font-bold text-emerald-200">Filtro de inmuebles:</h3></div>
	  <div className="container mx-auto flex flex-wrap p-5 flex-col justify-center gap-28 md:flex-row items-center">
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md bg-emerald-600 text-black font-semibold text-lg border-r-16 border-emerald-600 ">
					<option selected>Ciudad</option>
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">Three</option>
				  <option value="4">Four</option>
				  <option value="5">Five</option>
				</select>
			</div>
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md bg-emerald-600 text-black font-semibold">
					<option selected>Tipo</option>
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">Three</option>
				  <option value="4">Four</option>
				  <option value="5">Five</option>
				</select>
			</div>
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md bg-emerald-600 text-black font-semibold">
					<option selected>Inmobiliaria</option>
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">Three</option>
				  <option value="4">Four</option>
				  <option value="5">Five</option>
				</select>
			</div>
	  </div>
	</div>
	)
}

export default Filter