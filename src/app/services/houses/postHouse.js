import axios from 'axios'
// export const postHouse = async (newHouse) => {
//   const apiUrl = 'http://localhost:3001/api/houses'
//   try {
//     await axios
//       .post(apiUrl, { newHouse })
//       .then((response) => {
//         const { data } = response
//         console.log('data', data)
//         return data
//       })
//   } catch (error) {
//     console.error('Error al realizar la solicitud:', error)
//     throw error
//   }
// }

export const postHouse = async (newHouse) => {
  // const apiUrl = 'http://localhost:3001/api/houses'
  const apiUrl = 'http://localhost:3001/api/houses'
  try {
    const response = await axios.post(
      apiUrl, newHouse)
    const { data } = response
    return data
  } catch (error) {
    console.error('Error al realizar la solicitud:', error)
    throw error
  }
}
