
import apiHouses from "@/api"
import React from 'react'

export default async function Filter() {
	const [locations, types, realEstates] = await Promise.all([
		apiHouses.getLocations(),
		apiHouses.getTypesEstate(),
		apiHouses.getRealEstates()
	]);
	


	return(
		<section>
			<div className="lg:my-24 lg:w-2/3 md:my-48 lg:flex-col max-w-[90%] mx-auto overflow-hidden text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-slate-600 rounded-xl transition-all flex flex-col justify-center items-center">
				<div><h3 className="text-2xl font-bold text-lime-700">Filtro de inmuebles:</h3></div>
			  <div className="container mx-auto flex flex-row flex-wrap p-5 justify-center gap-4 sm:flex-row md:flex-col lg:flex-row items-center">
					<div>
						<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-black text-lg border-r-16 w-64">
							<option value="" disabled>Ciudad</option>
				      {locations.map((location) => (
				        <option key={location} value={location}>{location}</option>
				      ))}					
						</select>
					</div>
					<div>
						<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-lg text-black border-r-16 w-64">
							<option value="" disabled>Tipo</option>
							{types.map(type=>(
							  <option key={type} value={type}>{type}</option>
							))}
						</select>
					</div>
					<div>
						<select data-te-select-init data-te-select-visible-options="3" className="py-4 px-16 rounded-md border border-black text-lg text-black border-r-16 w-64">
							<option value="default" disabled>Inmobiliaria</option>
							{realEstates.map(realEstate => (
								<option key={realEstate} value={realEstate}>{realEstate}</option>
							))}
						</select>
					</div>
	  		</div>
			</div>
		</section>
	)
}