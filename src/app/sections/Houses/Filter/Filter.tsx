
import apiHouses from "@/api"
import React from 'react'
import FilterForm from "./FilterForm";

export default async function Filter() {
	const [locations, types, realEstates] = await Promise.all([
		apiHouses.getLocations(),
		apiHouses.getTypesEstate(),
		apiHouses.getRealEstates()
	]);

	return(
		<section id="filter-houses">
			<div className="lg:my-24 lg:w-2/3 my-24 md:my-48 lg:flex-col max-w-[90%] mx-auto overflow-hidden text-gray-400 bg-header body-font shadow-2xl hover:shadow-lg hover:shadow-slate-600 rounded-xl transition-all flex flex-col justify-center items-center">
					<div className="py-2"><h3 className="text-2xl font-bold text-lime-700">Filtro de inmuebles:</h3></div>
					<FilterForm locations={locations} types={types} realEstates={realEstates}/>
			</div>
		</section>
	)
}