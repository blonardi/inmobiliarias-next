//import { NextResponse } from "next/server"

export async function getHouses(){
	const response = await fetch('http://localhost:3001/api/houses')
	const data = await response.json()
	//console.log(data)
	return (data)
}

export async function getHousesFiltered(location, type, realEstate){
	const response = await fetch('http://localhost:3001/api/houses')
	const data = await response.json()
	if (!location && !type && !realEstate) {
    return data;
  }
	const filteredHouses = data.filter((house) => {
    // Verificamos si la casa cumple con los criterios de filtrado
    const locationMatch = !location || house.location === location;
    const typeMatch = !type || house.type === type;
    const realEstateMatch = !realEstate || house.realEstate === realEstate;
    // Retornamos true si la casa cumple con todos los criterios de filtrado
    return locationMatch && typeMatch && realEstateMatch;
  });

	console.log(data)
  return filteredHouses;
}