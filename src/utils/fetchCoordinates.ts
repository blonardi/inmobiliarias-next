// utils/fetchCoordinates.ts
export const fetchCoordinates = async (
  address: string,
  location: string,
  state: string
): Promise<{ lat: number; lon: number } | null> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        `${address}, ${location}, ${state}`
      )}`
    )
    const data = await response.json()

    if (data.length > 0) {
      const { lat, lon } = data[0]
      return { lat, lon }
    } else {
      console.log('No coordinates found')
      return null
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error)
    return null
  }
}
