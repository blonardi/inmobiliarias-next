export const addNewFormHouse = async (nuevaCasa) => {
  // de esta forma seria sin el async, manejo la promesa que mando desde el postHouse
  // postHouse(nuevaCasa)
  //   .then((nuevaCasaRes) => {
  //     setHouses([...houses, nuevaCasaRes])
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })

  // CHATGPT WORKS
  try {
    const resultHouse = await postHouse(nuevaCasa)
    setHouses([...houses, resultHouse])
  } catch (error) {
    console.error('Error al agregar una nueva casa:', error)
    throw error
  }
}
