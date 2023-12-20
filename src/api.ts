import axios from "axios"
import { FormValues, House } from "./types"


const apiHouses = {

  // si tira error, check {houses:[{}]}
  listhouses: async (): Promise<House[]> => {
    const response = await fetch('http://localhost:3000/api/casas', { cache: 'no-store' })
    const data = await response.json()
    const houses = data.houses
    return houses
  },

  // permalink, parametro,
  fetchHouse: async (permalink: House['permalink']): Promise<House> => {
    const response = await fetch(`http://localhost:3001/api/houses/${permalink}`)
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

  // post: async(): Promise<House> => {
  // 	const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
  // }

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

}

export default apiHouses
