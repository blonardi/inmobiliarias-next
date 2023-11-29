// params de la url
import apiHouses from "@/api"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata({params:{permalink}}: {params: {permalink:string}}){
	const response = await fetch(`http://localhost:3001/api/houses/${permalink}`)
	console.log({response})
  if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`)
  }
  const house = await response.json()

	return {
		title: `${house.title} - ${house.realEstate}`,
		description: house.description
	}
}



export default async function Details({params: {permalink} }:{params: { permalink : string} }) {
	const house = await apiHouses.fetchHouse(permalink)

  return (
		<>
			<Link href={'/'}>
				<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
				Regresar
				</button>
			</Link>
			<article key={house.permalink}>
	      <div className='house-details'>
	        <div className='details details-img'>
	          <img width={800} height={600} src={house.houseImage} alt='House' />
	        </div>
	        <div className='details details-data'>
	          <div className='data-title'>
	            <h2>{house.title}</h2>
	          </div>
	          <div className='data-price'>
	            <p>Price: ${house.price}</p>
	          </div>
	          <div className='data-address'>
	            <p>Address: {house.address}</p>
	          </div>
	          <div className='data-description'>
	            <p>{house.description}</p>
	          </div>
	          <div className='date-description'>
	            <p>Fecha: {house.date}</p>
	          </div>
	        </div>
	      </div>
			</article>
		</>
  )
}

