// import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage'
// import { Details } from './pages/Details/Details'
// import { Header } from './components/Header/Header'
// import { Form } from './components/Form/Form'

import apiHouses from "@/api"
import Card from './components/Card/Card'
import Image from "next/image"
import Link from "next/link"
import SearchBox from "./components/SearchBox"
import { redirect } from "next/navigation"
import Hero from "./components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Filter from "./components/Hero/Filter"

export default async function HomePage () {
	
	const houses = await apiHouses.listhouses()
	// async function searchAction(formData: FormData) {
  //   'use server'

  //   redirect(`/?q=${formData.get('query')}`);
  // }


	return (
    <>
			<section className="h-screen">
				<Header />
				<Hero />
			</section>
			<section>
				<Filter />
			</section>
			{/* <section className='h-screen'>
			</section>			 */}
		{/* <SearchBox /> */}

		{/* <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input defaultValue={searchParams.q || ''} className="px-2" name="query" />
        <button type="submit" className="p-2 bg-white/20">Search</button>
      </form> */}
			<section className='my-4 py-8 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center bg-teal-700 flex-wrap'>
					{houses.map( (house) =>{ 
					return(

						
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
					)})}
			</section>
			<section>
				<Footer />
			</section>
    </>
  )
}

