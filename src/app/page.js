// import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage'
// import { Details } from './pages/Details/Details'
// import { Header } from './components/Header/Header'
// import { Form } from './components/Form/Form'

import apiHouses from "@/api"
import Image from "next/image"
import Link from "next/link"


export default async function HomePage () {
	
	const houses = await apiHouses.listhouses()
	return (
    <>
		<section className='bg-gray-500 py-8 flex justify-center'>
			<h2 className='text-center'>SECTION IMAGEN PORTADA 👾</h2>
		</section>

		<section className='bg-gray-500 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
		{houses.map( (house) =>{ 
		return(
			<Link key={house.permalink} href={`/house/${house.permalink}`}>
				<article className='house-card'>
	        <div className='house-image'>
	          {/* <Image 
						width={300}			
	      		height={200}className='house-image-src' src={house.houseImage} alt={house.title} /> */}
					   <img
						 width={300}			
						 height={200}
	            alt={house.title}
	            className="mb-3 h-[300px] w-full object-cover"
	            src={house.houseImage}
	          />
	        </div>
	        <section className='house-info'>
	          <div className='house-price'>
	            <p>USD {house.price}</p>
	          </div>
	          <header className='house-name'>
	            <h2>{house.title}</h2>
	          </header>
	          <div className='house-address'>
	            {/* <Image src={gpsLogo} alt='' /> */}
	            <div className='house-address-direction'>
	              <p>{house.address}</p>
	            </div>
	          </div>
	        </section>
	      </article>
			</Link>
		)})}
		</section>
	
      {/* <Header />
      <Routes>
        <Route path='/' element={<HomePage />} /> */}
        {/* <Route path='/nosotros' element={<Nosotros />} /> */}
        {/* <Route path='/contacto' element={<Contacto />} /> */}
        {/* <Route path='/details/:id' element={<Details />} />
        <Route path='form' element={<Form />} />
      </Routes> */}
    </>
  )
}

