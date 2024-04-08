import Card from '@/components/Card/Card'
import Link from "next/link"
import apiHouses from '@/api'
import { House } from '@/types';

interface HousesSectionProps {
  location: House['location'];
  type: House['type'];
  realEstate: House['realEstate'];
}


export default async function HousesSection({location,type,realEstate}: HousesSectionProps) {

	//const houses = await getHouses()
	const houses: House[] = await apiHouses.getHousesFiltered(location, type, realEstate)
	//console.log(houses)
	return (
			<section id='houses'>
				<div className='my-4 py-8 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-center flex-wrap'>
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
					))):(
						<div className='flex justify-center items-center col-span-full'>
							<p className='text-center text-lg'>Lo sentimos, no hay inmuebles con esas caracteristicas 🤔</p>
						</div>
					)
				}
				</div>
			</section>
	)
}
