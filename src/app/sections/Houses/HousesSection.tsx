import Card from '@/components/Card/Card'
import Link from "next/link"
import apiHouses from '@/api'
import { House } from '@/types';
import Map from '@/components/Maps/Map';
import Pagination from '@/components/Pagination/Pagination';

interface HousesSectionProps {
	location: House['location'];
	type: House['type'];
	realEstate: House['realEstate'];
	page: string
}


export default async function HousesSection({ location, type, realEstate, page }: HousesSectionProps) {
	const currentPage = Number(page) || 1
	console.log({ currentPage })
	const { houses, totalPages } = await apiHouses.getHousesFiltered(location, type, realEstate, currentPage)
	//const totalPages = await apiHouses.getTotalPages(houses)
	console.log(houses)
	return (
		<section id='houses'>
			<div className='my-4 max-w-7xl mx-auto py-8 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center flex-wrap'>
				{houses.length > 0 ? (
					houses.map((house) => (
						<Link key={house.permalink} href={`house/${house.permalink}`}>
							<Card
								price={house.price}
								title={house.title}
								address={house.address}
								dimention={house.dimention}
								type={house.type}
								location={house.location}
								realEstate={house.realEstate}
								houseImage={house.houseImage}
							/>
						</Link>
					))) : (
					<div className='flex justify-center items-center col-span-full'>
						<p className='text-center text-lg'>Lo sentimos, no hay inmuebles con esas caracteristicas 🤔</p>
					</div>
				)
				}
			</div>

			<div className='pagination'>
				<Pagination totalPages={totalPages} currentPage={currentPage} />
			</div>
			<div className='renderHousesMap'>
				{houses.length > 0 ? (
					<Map houses={houses} />
				) : (
					<p>El mapa no se pudo renderizar, intente luego🤐</p>
				)
				}
			</div>
		</section>
	)
}
