import { useEffect, useState } from 'react'

export const useGetHouse = (id) => {
  const [house, setHouse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHouseByID = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/houses/${id}`)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const houseData = await response.json()
        setHouse(houseData)
      } catch (error) {
        console.error('Error fetching house:', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchHouseByID()
  }, [id])

  return { house, loading, error }
}
