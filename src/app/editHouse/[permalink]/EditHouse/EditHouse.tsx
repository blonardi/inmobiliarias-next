
import EditFormulario from '@/components/EditFormulario/EditFormulario'
import { House } from '@/types' 

export default async function EditHouse({ house }: { house : House }) {
	const {permalink, price, title, address, description, dimention, type, location, realEstate, houseImage } = house
	return (
			<EditFormulario permalink={permalink} price={price} title={title} address={address} description={description} dimention={dimention} type={type} location={location} realEstate={realEstate} houseImage={houseImage}  />
	)
}