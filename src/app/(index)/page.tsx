import Header from "../sections/Header/Header"
import Filter from "../sections/Houses/Filter/Filter"
import { Suspense } from 'react'
import LoadingCard from '@/components/ui/loadingCard'
import { House } from "@/types"
import { Footer } from "@/components/Footer/Footer"
import { GridSection } from "../sections/GridSection/GridSection"
import ContactForm from "@/components/ContactForm/ContactForm"
import HousesContainer from "../sections/Houses/Section"

// Definimos el tipo para los parámetros de búsqueda
interface SearchParams {
	location?: House['location'] | '';
	type?: House['type'] | '';
	realEstate?: House['realEstate'] | '';
	page?: string;
}

// Definimos las props que Next.js pasa a la página
type PageProps = {
	searchParams: SearchParams;
};

export default function HomePage({ searchParams }: PageProps) {
	// Desestructuramos searchParams con valores por defecto
	const {
		location,
		type,
		realEstate,
		page = '1'
	} = searchParams;

	return (
		<>
			{/*<Header />
			<Suspense fallback={<p>Cargando Filter</p>}>
				<Filter />
			</Suspense>*/}

			<Suspense key={`${location}${type}${realEstate}${page}`} fallback={<LoadingCard />}>
				<HousesContainer
					location={location}
					type={type}
					realEstate={realEstate}
					page={page}
				/>
			</Suspense>

			{/*<GridSection />
			<ContactForm />
			<Footer />*/}
		</>
	);
}