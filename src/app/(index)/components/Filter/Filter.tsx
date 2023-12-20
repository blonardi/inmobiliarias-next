

const Filter = () => {
	return(
	<div className="lg:my-24 lg:w-2/3 md:my-48 lg:flex-col max-w-[90%] mx-auto overflow-hidden text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-slate-600 rounded-xl transition-all flex flex-col justify-center items-center">
		<div><h3 className="text-2xl font-bold text-lime-700">Filtro de inmuebles:</h3></div>
	  <div className="container mx-auto flex flex-row flex-wrap p-5 justify-center gap-4 sm:flex-row md:flex-col lg:flex-row items-center">
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-black text-lg border-r-16 w-64">
					<option value="default" disabled>Ciudad</option>
				  <option value="larroque">Larroque</option>
				  <option value="irazusta">Irazusta</option>
				  <option value="talitas">Talitas</option>
				  <option value="carbo">Carbo</option>
				</select>
			</div>
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-lg text-black border-r-16 w-64">
					<option value="default" disabled>Tipo</option>
				  <option value="casa">Casa</option>
				  <option value="terreno">Terreno</option>
				  <option value="lote">Lote</option>
				</select>
			</div>
			<div>
				<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-lg text-black border-r-16 w-64">
					<option value="default" disabled>Inmobiliaria</option>
				  <option value="perera">Perera</option>
				  <option value="korell">Korell</option>
				  <option value="tomassi">Tomassi</option>
				  <option value="zapata">Zapata</option>
				</select>
			</div>
	  </div>
	</div>
	)
}

export default Filter