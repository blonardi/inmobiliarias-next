import Card from '@/app/(index)/components/Card/Card'
import Link from "next/link"

import { getHouses } from '@/app/api/casas/route'

export default async function HousesSection() {

	const houses = await getHouses()

	return (
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
	)
}
