

import Header from "../sections/Header/Header"
//import SearchBox from '@/components/SearchBox/SearchBox'
import HousesSection from "../sections/Houses/HousesSection"
import Filter from "../sections/Houses/Filter/Filter"
import { Suspense } from 'react'
import LoadingCard from '@/components/ui/loadingCard'
import { House } from "@/types"
import { Footer } from "@/components/Footer/Footer"
import { GridSection } from "../sections/GridSection/GridSection"
import ContactForm from "@/components/ContactForm/ContactForm"

//interface SearchParamsProps extends House{}
interface SearchParamsProps {
	location: House['location'],
	type: House['type'],
	realEstate: House['realEstate'],
	page: string
}

export default async function HomePage({ searchParams }: { searchParams: SearchParamsProps }) {
	//const houses = await apiHouses.search(searchParams.q)

	// async function searchAction(formData: FormData) {
	//   'use server'

	//   redirect(`/?q=${formData.get('query')}`);
	// }
	const { location, type, realEstate, page } = searchParams || ''

	return (
		<>
			<Header />
			<Suspense fallback={<p>Cargando Filter</p>}>
				<Filter />
			</Suspense>
			{/*<SearchBox />*/}

			<Suspense key={location + type + realEstate} fallback={<LoadingCard />}>
				<HousesSection location={location} type={type} realEstate={realEstate} page={page} />
			</Suspense>

			<GridSection />
			<ContactForm />
			<Footer />
		</>
	)
}

