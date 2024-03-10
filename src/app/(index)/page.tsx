

import Header from "../sections/Header/Header"
import SearchBox from "./components/SearchBox"
import HousesSection from "../sections/Houses/HousesSection"
//import Map from "./components/Maps/Map"
import Filter from "../sections/Houses/Filter/Filter"
import {Suspense} from 'react'
import LoadingCard from '@/app/(index)/components/ui/loadingCard'




export default async function HomePage ({searchParams}: {searchParams: {q: string}}) {
	//const houses = await apiHouses.search(searchParams.q)
	
	// async function searchAction(formData: FormData) {
  //   'use server'

  //   redirect(`/?q=${formData.get('query')}`);
  // }


	return (
    <>
			<Header/>
			<Filter />
			{/*<SearchBox />*/}

			{/* <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input defaultValue={searchParams.q || ''} className="px-2" name="query" />
        <button type="submit" className="p-2 bg-white/20">Search</button>
      </form> */}
			<Suspense fallback={<LoadingCard/>}>
				<HousesSection/>		
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

