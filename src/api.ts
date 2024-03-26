import axios from "axios"
import { FormValues, House } from "./types"


const apiHouses = {

  // si tira error, check {houses:[{}]}
  listhouses: async (): Promise<House> => {
    const response = await fetch('http://localhost:3001/api/houses', { cache: 'no-store' })
    const dataHouses = await response.json()
		if (!dataHouses) {
      throw new Error(`Error al traer las casas.`)
    }
    return dataHouses
  },

	getHousesFiltered: async(location: House['location'], type: House['type'], realEstate: House['realEstate']): Promise<House> => {
		const response = await fetch('http://localhost:3001/api/houses', { cache: 'no-store' })
		const data = await response.json()
		if (!location && !type && !realEstate) {
			return data;
		}
		const filteredHouses = data.filter((house:House) => {
			// Verificamos si la casa cumple con los criterios de filtrado
			const locationMatch = !location || house.location === location;
			const typeMatch = !type || house.type === type;
			const realEstateMatch = !realEstate || house.realEstate === realEstate;
			// Retornamos true si la casa cumple con todos los criterios de filtrado
			return locationMatch && typeMatch && realEstateMatch;
		});
	
		return filteredHouses;
	},

  // permalink, parametro,
  fetchHouse: async (permalink: House['permalink']): Promise<House> => {
    const response = await fetch(`http://localhost:3001/api/houses/${permalink}`, {cache: 'no-store'})
    const house = await response.json()

    if (!house) {
      throw new Error(`House with permalink ${permalink} not found`)
    }
    return house
  },

  search: async (query: string): Promise<House[]> => {
    const houses = await apiHouses.listhouses()
    if (!query) {
      // Si query está vacío, retornar todas las casas
      return houses
    }
    return houses.filter((house) => house.title.toLowerCase().includes(query.toLowerCase()))
  },

	postHouse: async (newHouseData: FormValues): Promise<House> => {
    //const response = await fetch('http://localhost:3001/api/houses', {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json',
    //  },
    //  body: JSON.stringify(newHouseData),
    //})
		//console.log({response})
    //if (!response.ok) {
    //  throw new Error('Error al crear la casa'); // Puedes personalizar el mensaje de error según tus necesidades
    //}

    //const createdHouse: House = await response.json();
    //return createdHouse;
		console.log(typeof(newHouseData.price))
		const apiUrl = 'http://localhost:3001/api/houses'
		try {
			const response = await axios.post(
				apiUrl, newHouseData)
			const { data } = response
			return data
		} catch (error) {
			console.error('Error al realizar la solicitud:', error)
			throw error
		}
  },

	getLocations: async() => {
		try {
			const response = await fetch('http://localhost:3001/api/houses/locations')
			if (!response.ok) {
				throw new Error('Error en la solicitud');
			}
			const locations = await response.json()
			if (!Array.isArray(locations) || locations.length === 0) {
				throw new Error('Error al obtener las ubicaciones');
			}
			return locations	
		} catch (error) {
			console.error('Error en la solicitud:', error);
  		throw new Error('Error al obtener las ubicaciones');
		}
		
	},

	getTypesEstate: async() => {
		try {
			const response = await fetch('http:localhost:3001/api/houses/typesestate')
			if(!response.ok){
				throw new Error('Error en la solicitud')
			}
			const typesEstate = await response.json()
			if(!Array.isArray(typesEstate) || typesEstate.length === 0){
				throw new Error('Error al obtener tipos de terrenos')
			}
			return typesEstate
		} catch (error) {
			console.error('Error en la solicitud:', error);
  		throw new Error('Error al obtener tipos de terrenos');
		}
	},

	getRealEstates: async() => {
		try {
			const response = await fetch('http://localhost:3001/api/houses/realestates')
			if(!response.ok){
				throw new Error('Error en la solicitud')
			}
			const realEstate = await response.json()
			if(!Array.isArray(realEstate) || realEstate.length === 0){
				throw new Error('Error al obtener tipos de terrenos')
			}
			return realEstate
		} catch (error) {
			console.error('Error en la solicitud:', error);
  		throw new Error('Error al obtener real estate names');
		}
	}

}

export default apiHouses
