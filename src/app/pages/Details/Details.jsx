import { useGetHouse } from '../../hooks/useGetHouse'
import './Details.css'

import { useParams } from 'react-router-dom'
// import { dataAssets } from '../../assets/dataAssets'

export const Details = () => {
  const { id } = useParams()

  const { house, loading, error } = useGetHouse(id)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main className='container'>
      <div className='house-details'>
        <div className='details details-img'>
          <img src={house.houseImage} alt='House' />
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
    </main>
  )
}
