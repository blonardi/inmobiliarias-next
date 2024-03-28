// {icon, text, alt}
import './itemCard.css'

export const ItemCard = ({ dimention, type, realEstate }) => {
  return (
    <section className='house-measures-data'>
      <div>
        {/* <img src="" alt="" /> */}
        <span>{dimention}m2</span>
      </div>

      <div className='border-end'>
        {/* <img src="" alt="" /> */}
        <span>{type}</span>
      </div>

      <div>
        {/* <img src="" alt="" /> */}
        <span>{realEstate}</span>
      </div>
    </section>
  )
}

// export default ItemCard
