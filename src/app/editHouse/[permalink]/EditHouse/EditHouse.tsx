
import EditFormulario from '@/components/EditFormulario/EditFormulario'

export default async function EditHouse({ house }) {
	const {permalink, price, title, address, description, dimention, type, location, realEstate, houseImage } = house
	return (
			<EditFormulario permalink={permalink} price={price} title={title} address={address} description={description} dimention={dimention} type={type} location={location} realEstate={realEstate} houseImage={houseImage}  />
	)
}