import Image from 'next/image'
import apiHouses from '@/api'
import Link from 'next/link'

export async function generateMetadata ({ params: { permalink } }: { params: { permalink: string } }) {
  const response = await fetch(`http://localhost:3001/api/houses/${permalink}`)
  console.log({ response })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  const house = await response.json()

  return {
    title: `${house.title} - ${house.realEstate}`,
    description: house.description
  }
}

export default async function Details ({ params: { permalink } }: { params: { permalink: string } }) {
  const house = await apiHouses.fetchHouse(permalink)

  return (
		<>
				<Link href={'/'}>
					<p className="bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white px-2 py-2 rounded border border-emerald-900 w-auto inline-block m-2">
					Regresar a Inicio
					</p>
				</Link>
			<section className='md:max-w-md lg:max-w-lg flex flex-col items-center justify-start mx-auto gap-y-6'>
				<article key={house.permalink}>
		      <div className='house-details'>
		        <div className='details details-img'>
		          <img width={800} height={600} src={house.houseImage} alt='House' />
		        </div>
						<section className='flex gap-2 py-2 px-4'>
								<div>
									<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{house.type}</span>
								</div>
								<div>
									<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{house.location}</span>
								</div>
								<div>
									<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{house.realEstate}</span>
								</div>
						</section>
		        <div className='details details-data m-4 flex flex-col items-start justify-center gap-y-2'>
		          <div className='data-title'>
		            <h2 className='text-3xl text-emerald-900'>{house.title}</h2>
		          </div>
		          <div className='data-price'>
		            <p className='text-xl text-slate-500'><span className='font-bold'>Price:</span> ${house.price}</p>
		          </div>
		          <div className='data-address'>
		            <p className=' text-emerald-900'>Address: {house.address}</p>
		          </div>
		          <div className='data-description rounded-lg'>
		            <p className='text-lg text-slate-500'>{house.description}</p>
		          </div>
		          <div className='date-description py-4'>
		            <p className='text-emerald-900'><span className='font-bold'>Fecha:</span> {house.date}</p>
		          </div>
		        </div>
		      </div>
				</article>
			</section>
		</>
  )
	}
