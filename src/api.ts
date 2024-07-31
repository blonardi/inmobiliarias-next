import axios from 'axios'
import { House, EditFormularioValues } from './types'
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_LOCAL_API_URL

interface PaginationParams {
  page: number
  itemsPerPage: number
}

interface Property {
  permalink: string
  title: string
  address: string
  location: string
  realEstate: string
  lat: number
  lon: number
}

const ITEMS_PER_PAGE = 8
const apiHouses = {
  // si tira error, check {houses:[{}]}
  //listhouses: async (): Promise<House[]> => {
  //  const response = await fetch(`${baseUrl}/houses`, { cache: 'no-store' })
  //  const dataHouses = await response.json()
  //	if (!dataHouses) {
  //    throw new Error(`Error al traer las casas.`)
  //  }
  //  return dataHouses
  //},

  //getHousesFiltered: async(location: House['location'], type: House['type'], realEstate: House['realEstate']): Promise<House[]> => {
  //	const response = await fetch(`${baseUrl}/houses`, { cache: 'no-store' })
  //	const data = await response.json()
  //	if (!location && !type && !realEstate) {
  //		return data;
  //	}
  //	const filteredHouses = data.filter((house:House) => {
  //		// Verificamos si la casa cumple con los criterios de filtrado
  //		const locationMatch = !location || house.location === location;
  //		const typeMatch = !type || house.type === type;
  //		const realEstateMatch = !realEstate || house.realEstate === realEstate;
  //		// Retornamos true si la casa cumple con todos los criterios de filtrado
  //		return locationMatch && typeMatch && realEstateMatch;
  //	});

  //	return filteredHouses;
  //},

  getTotalPages: async (filteredHouses: House[]): Promise<number> => {
    const totalItems = filteredHouses.length
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    return totalPages
  },

  //getHousesFiltered: async (
  //  location: House['location'],
  //  type: House['type'],
  //  realEstate: House['realEstate'],
  //  page: number
  //): Promise<House[]> => {
  //  try {
  //		console.log({page})
  //    // Realizar la lógica para obtener las casas filtradas
  //    const response = await fetch(`${baseUrl}/houses?page=${page}`, { cache: 'no-store' });
  //    const data = await response.json();

  //    if (!location && !type && !realEstate) {
  //      return data || []; // Devolver todas las casas si no hay filtros
  //    }

  //    const filteredHouses = data.filter((house: House) => {
  //      const locationMatch = !location || house.location === location;
  //      const typeMatch = !type || house.type === type;
  //      const realEstateMatch = !realEstate || house.realEstate === realEstate;
  //      return locationMatch && typeMatch && realEstateMatch;
  //    });

  //    return filteredHouses || []; // Devolver las casas filtradas o un array vacío si no hay datos
  //  } catch (error) {
  //    console.error('Error al obtener las casas filtradas:', error);
  //    throw new Error('Error al obtener las casas filtradas.');
  //  }
  //},

  // permalink, parametro,
  //getHousesFiltered : async (
  //	location: House['location'],
  //	type: House['type'],
  //	realEstate: House['realEstate'],
  //	page: number
  //): Promise<House[]> => {
  //	try {
  //		console.log({page});

  //		// Realizar la lógica para obtener las casas filtradas
  //		const response = await fetch(`${baseUrl}/houses`, { cache: 'no-store' });
  //		const data = await response.json();

  //		let filteredHouses = data;
  //		if (location || type || realEstate) {
  //			filteredHouses = data.filter((house: House) => {
  //				const locationMatch = !location || house.location === location;
  //				const typeMatch = !type || house.type === type;
  //				const realEstateMatch = !realEstate || house.realEstate === realEstate;
  //				return locationMatch && typeMatch && realEstateMatch;
  //			});
  //		}

  //		// Calcular el número total de páginas
  //		const totalItems = filteredHouses.length;

  //		// Calcular el índice inicial y final de las casas para la página actual
  //		const startIndex = (page - 1) * ITEMS_PER_PAGE;
  //		const endIndex = startIndex + ITEMS_PER_PAGE;

  //		// Obtener las casas para la página actual
  //		const paginatedHouses = filteredHouses.slice(startIndex, endIndex);

  //		return paginatedHouses
  //	} catch (error) {
  //		console.error('Error al obtener las casas filtradas:', error);
  //		throw new Error('Error al obtener las casas filtradas.');
  //	}
  //},

  getHousesFiltered: async (
    location: House['location'] | undefined,
    type: House['type'] | undefined,
    realEstate: House['realEstate'] | undefined,
    page: number
  ): Promise<{ houses: House[]; totalPages: number }> => {
    try {
      console.log({ page })

      // Realizar la lógica para obtener las casas filtradas
      const response = await fetch(`${baseUrl}/houses`, { cache: 'no-store' })
      const data = await response.json()

      let filteredHouses = data
      if (location || type || realEstate) {
        filteredHouses = data.filter((house: House) => {
          const locationMatch = !location || house.location === location
          const typeMatch = !type || house.type === type
          const realEstateMatch = !realEstate || house.realEstate === realEstate
          return locationMatch && typeMatch && realEstateMatch
        })
      }

      // Calcular el número total de páginas
      const totalItems = filteredHouses.length
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

      // Calcular el índice inicial y final de las casas para la página actual
      const startIndex = (page - 1) * ITEMS_PER_PAGE
      const endIndex = startIndex + ITEMS_PER_PAGE

      // Obtener las casas para la página actual
      const paginatedHouses = filteredHouses.slice(startIndex, endIndex)

      return { houses: paginatedHouses, totalPages }
    } catch (error) {
      console.error('Error al obtener las casas filtradas:', error)
      throw new Error('Error al obtener las casas filtradas.')
    }
  },

  fetchHouse: async (permalink: House['permalink']): Promise<House> => {
    try {
      console.log({ baseUrl })
      const response = await fetch(`${baseUrl}/houses/${permalink}`, {
        cache: 'no-store'
      })
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      const house = await response.json()
      if (!house) {
        throw new Error(`House with permalink ${permalink} not found`)
      }
      return house
    } catch (error) {
      console.error('Error en la solicitud para conseguir una casa:', error)
      throw new Error('Error al obtener una casa.')
    }
  },

  //search: async (query: string): Promise<House[]> => {
  //  const houses = await apiHouses.listhouses()
  //  if (!query) {
  //    // Si query está vacío, retornar todas las casas
  //    return houses
  //  }
  //  return houses.filter((house) => house.title.toLowerCase().includes(query.toLowerCase()))
  //},

  postHouse: async (newHouseData: FormData): Promise<House> => {
    try {
      const response = await axios.post(
        `http://localhost:3002/api/houses`,
        newHouseData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      const { data } = response
      return data
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
      throw error
    }
  },

  patchHouse: async (
    permalink: House['permalink'],
    data: EditFormularioValues
  ): Promise<House> => {
    try {
      console.log({ baseUrl })
      const response = await axios.patch(
        `${baseUrl}/houses/${permalink}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (!response) {
        throw new Error('Error en la solicitud de actualizacion')
      }
      const patchedHouse = await response.data
      return patchedHouse
    } catch (error) {
      console.error('Ha ocurrido un error al actualizar la casa:', error)
      throw new Error('Error al actualizar la casa.')
    }
  },

  getLocations: async () => {
    try {
      const response = await fetch(`${baseUrl}/houses/locations`, {
        cache: 'no-store'
      })
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      const locations = await response.json()
      if (!Array.isArray(locations) || locations.length === 0) {
        throw new Error('Error al obtener las ubicaciones')
      }
      return locations
    } catch (error) {
      console.error('Error en la solicitud:', error)
      throw new Error('Error al obtener las ubicaciones')
    }
  },

  getTypesEstate: async () => {
    try {
      const response = await fetch(`${baseUrl}/houses/typesestate`, {
        cache: 'no-store'
      })
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      const typesEstate = await response.json()
      if (!Array.isArray(typesEstate) || typesEstate.length === 0) {
        throw new Error('Error al obtener tipos de terrenos')
      }
      return typesEstate
    } catch (error) {
      console.error('Error en la solicitud:', error)
      throw new Error('Error al obtener tipos de terrenos')
    }
  },

  getRealEstates: async () => {
    try {
      const response = await fetch(`${baseUrl}/houses/realestates`, {
        cache: 'no-store'
      })
      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }
      const realEstate = await response.json()
      if (!Array.isArray(realEstate) || realEstate.length === 0) {
        throw new Error('Error al obtener tipos de terrenos')
      }
      return realEstate
    } catch (error) {
      console.error('Error en la solicitud:', error)
      throw new Error('Error al obtener real estate names')
    }
  },

  transformationData: async (houses: House[]): Promise<Property[]> => {
    const transformedPropertiesHouses = houses.map((house: House) => {
      return {
        permalink: house.permalink,
        title: house.title,
        address: house.address,
        location: house.location,
        realEstate: house.realEstate,
        lat: 0,
        lon: 0
      }
    })

    return transformedPropertiesHouses as Property[]
  }
}

export default apiHouses
