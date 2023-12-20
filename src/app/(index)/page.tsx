// import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage'
// import { Details } from './pages/Details/Details'
// import { Header } from './components/Header/Header'
// import { Form } from './components/Form/Form'

import apiHouses from "@/api"
import Card from './components/Card/Card'
import Link from "next/link"
import SearchBox from "./components/SearchBox"
import Hero from "./components/Hero/Hero"
import Filter from "./components/Filter/Filter"
import Map from "./components/Maps/Map"

export default async function HomePage ({searchParams}: {searchParams: {q: string}}) {
	
	const houses = await apiHouses.search(searchParams.q)
	console.log({houses})
	// async function searchAction(formData: FormData) {
  //   'use server'

  //   redirect(`/?q=${formData.get('query')}`);
  // }


	return (
    <>
			<Hero />
			<section>
				<Filter />
				<SearchBox />
			</section>
			{/* <section className='h-screen'>
			</section>			 */}

		{/* <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input defaultValue={searchParams.q || ''} className="px-2" name="query" />
        <button type="submit" className="p-2 bg-white/20">Search</button>
      </form> */}
			<section className='my-4 py-8 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-centerflex-wrap'>
					{houses.length > 0 ? (
						houses.map((house) => ( 
					
						<Link key={house.permalink} href={`/house/${house.permalink}`}>
							<Card
				        id={house.id}
				        permalink={house.permalink}
				        price={house.price}
				        title={house.title}
				        address={house.address}
				        description={house.description}
				        dimention={house.dimention}
				        type={house.type}
				        location={house.location}
				        realEstate={house.realEstate}
				        houseImage={house.houseImage}
				      />
						</Link>
					))):(
						<p>No hay casas disponibles con ese nombre 🤔</p>
					)
				}
			</section>
			{houses.length > 0 ? (
				<Map houses={houses}/>
			):(
				<p>El mapa no se pudo renderizar, intente luego🤐</p>
			)
			}
			{/*<Map/>*/}
    </>
  )
}

