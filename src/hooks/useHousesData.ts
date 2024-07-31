import { useState, useEffect } from 'react'
import { House } from '@/types'
import apiHouses from '@/api'
import { fetchAPI } from '@/assets/fetchAPI'

interface Property {
  permalink: string
  title: string
  address: string
  location: string
  realEstate: string
  lat: number
  lon: number
}

interface UseHousesDataResult {
  properties: Property[]
  loading: boolean
}

const useHousesData = (houses: House[]): UseHousesDataResult => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const state = 'Entre Rios'

      try {
        const transformedPropertiesData: Property[] =
          await apiHouses.transformationData(houses)
        console.log({ transformedPropertiesData })
        const updatedProperties = await Promise.all(
          transformedPropertiesData.map(async (property) => {
            try {
              const data = await fetchAPI(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                  `${property.address}, ${property.location}, ${state}`
                )}`
              )
              if (data.length > 0) {
                const { lat, lon } = data[0]
                return { ...property, lat, lon }
              } else {
                console.log('No coordinates found')
                return property
              }
            } catch (error) {
              console.error('Error al obtener coordenadas:', error)
              return property
            }
          })
        )
        setProperties(updatedProperties)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [houses])

  return { properties, loading }
}

export default useHousesData
