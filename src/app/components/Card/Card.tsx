// import './card.css'
import { ItemCard } from '../ItemCard/ItemCard.jsx'
// import { Link } from 'react-router-dom'


interface CardProps {
  id: string;
  permalink: string;
  price: number;
  title: string;
  address: string;
  description: string;
  dimention: number;
  type: string;
  location: string;
  realEstate: string;
  houseImage: string;
}

const Card: React.FC<CardProps> = ({
  id,
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
}) => {
  return (
    // <Link className='card-link' key={permalink} href={`/house/${permalink}`}>
      <article className='house-card'>
        <div className='house-image'>
          <img className='house-image-src' src={houseImage} alt='' />
        </div>
        <section className='house-info'>
          <div className='house-price'>
            <p>USD {price}</p>
          </div>
          <header className='house-name'>
            <h2>{title}</h2>
          </header>
          <div className='house-address'>
            {/* <img src={gpsLogo} alt='' /> */}
            <div className='house-address-direction'>
              <p>{address}</p>
            </div>
          </div>
        </section>
        {/* <footer className='house-measures'>
          <ItemCard dimention={dimention} type={type} realEstate={realEstate} />
        </footer> */}
      </article>
    // </Link>
  )
}

export default Card