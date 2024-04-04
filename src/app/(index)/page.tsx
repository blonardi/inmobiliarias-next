

import Header from "../sections/Header/Header"
//import SearchBox from '@/components/SearchBox/SearchBox'
import HousesSection from "../sections/Houses/HousesSection"
//import Map from "./components/Maps/Map"
import Filter from "../sections/Houses/Filter/Filter"
import {Suspense} from 'react'
import LoadingCard from '@/components/ui/loadingCard'




export default async function HomePage ({searchParams}: {searchParams: {location?: string, type?: string, realEstate?: string, page?: string}}) {
	//const houses = await apiHouses.search(searchParams.q)
	
	// async function searchAction(formData: FormData) {
  //   'use server'

  //   redirect(`/?q=${formData.get('query')}`);
  // }
	console.log(searchParams)
	const  {location, type, realEstate}= searchParams || ''
	//const currentPage = Number(searchParams?.page) || 1
	console.log(location, type, realEstate)
	return (
    <>
			<Header/>
			<Suspense fallback={<p>Cargando Filter</p>}>
				<Filter />
			</Suspense>
			{/*<SearchBox />*/}

			<Suspense key={location + type + realEstate} fallback={<LoadingCard/>}>
				<HousesSection location={location} type={type} realEstate={realEstate}/>		
			</Suspense>

			{/*{houses.length > 0 ? (
				<Map houses={houses}/>
			):(
				<p>El mapa no se pudo renderizar, intente luego🤐</p>
			)
			}*/}
			{/*<Map/>*/}
    </>
  )
}

