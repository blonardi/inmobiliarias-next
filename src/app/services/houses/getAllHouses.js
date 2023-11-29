export const getAllHouses = async (url) => {
  try {
    const housesResponse = await fetch(url)
    const housesData = await housesResponse.json()
    // console.log(housesData)
    return housesData
  } catch (error) {
    console.log(error)
    throw error
  }
}
