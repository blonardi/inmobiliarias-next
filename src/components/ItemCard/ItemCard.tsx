// {icon, text, alt}
import './itemCard.css'
import { House } from '@/types'

interface FilterFormProps {
	dimention: House['dimention']; // Suponiendo que locations es un arreglo de strings
	type: House['type']; // Suponiendo que types es un arreglo de strings
	realEstate: House['realEstate']; // Suponiendo que realEstates es un arreglo de strings
}

export const ItemCard = ({ dimention, type, realEstate }: FilterFormProps) => {
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
