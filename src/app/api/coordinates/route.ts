import { NextResponse } from "next/server"

export async function GET(){
	const address = "Urquiza 150";
	const location = "Larroque";
	const province = "Entre Rios"

	const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
		`${address}, ${location}, ${province}`)}`;
	const response = await fetch(url)
	const data = await response.json()
	if(!data){
		return "Empty"
	}
	//console.log(data)
	return NextResponse.json(data)
}

//const fetchCoordinates = async () => {
//	console.log("fetchCoordinates")
//	const updatedProperties = await Promise.all(
//		properties.map(async (property) => {
//			try {
//				const response = await fetch(
//					`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//						`${property.address}, ${property.location}`
//					)}`
//				);
//				const data = await response.json();
//				console.log('API Response:', data);
//				if(data){
//					console.log({data})
//				}
//				if (data.length > 0) {
//					const { lat, lon } = data[0];
//					console.log('Coordinates:', lat, lon);
//					return { ...property, lat, lon };
//				} else {
//					console.log('No coordinates found');
//					return property; // Conservar el objeto original si no se encontraron coordenadas
//				}
//			} catch (error) {
//				console.error('Error al obtener coordenadas:', error);
//				return property; // Conservar el objeto original en caso de error
//			}
//		})
//	);
//	console.log(updatedProperties)
//	setProperties(updatedProperties);

//};
