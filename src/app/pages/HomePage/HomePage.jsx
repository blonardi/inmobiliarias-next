import './HomePage.css'
// import { dataAssets } from '../../assets/dataAssets'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter/Filter'
import { Form } from '../../components/Form/Form'
import { getAllHouses } from '../../services/houses/getAllHouses'
import { postHouse } from '../../services/houses/postHouse'
import { Route, Routes, Link } from 'react-router-dom'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'https://inmobiliarias-app.vercel.app/api/houses'
  : 'http://localhost:3001/api/houses'

export default function HomePage () {
  const backgroundImageStyles = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2013/11/05/19/12/buildings-205986_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  const [houses, setHouses] = useState()

  useEffect(() => {
    // si es uan funcion con algun tipo de fetch o peticion se resuelve asi

    const fetchData = async () => {
      try {
        const result = await getAllHouses('http://localhost:3001/api/houses')
        console.log(result.houses)
        setHouses(result.houses)
      } catch (error) {
        console.error('Error al obtener las casas:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main>
        <section className='heading-page' style={backgroundImageStyles}>
          <div className='container heading-container'>
            <div className='heading-textContainer'>
              <h2 className='subtitle'>Kumpel</h2>
              <h1 className='title'>
                Encuentra la mejor casa para vivir con tu familia😊🏘️
              </h1>
            </div>
          </div>
        </section>
        <section className='filter-section'>
          <Filter />
        </section>
        <section className='container-homepage'>
          {houses?.length > 0 && houses.map(
            ({
              permalink,
              price,
              title,
              address,
              description,
              dimention,
              type,
              location,
              realEstate,
              houseImage
            }) => (
              <Card
                key={permalink}
                id={permalink}
                price={price}
                title={title}
                address={address}
                description={description}
                dimention={dimention}
                type={type}
                location={location}
                realEstate={realEstate}
                houseImage={houseImage}
              />
            )
          )}
        </section>
      </main>

      <footer>
        <Link to='/form'>
          <button>FORM</button>
        </Link>
        {/* <Form addNewFormHouse={addNewFormHouse} houses={houses} /> */}
      </footer>
    </>
  )
}
