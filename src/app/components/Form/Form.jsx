// import { useState } from 'react'
import { createHouse, postHouse } from '../../services/houses/index'
import './Form.css'

export const Form = () => {
  // const [newHouse, setNewHouse] = useState()
  // const housePrice = useField({ type: number })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const newFormHouse = await createHouse(e)
    console.log(newFormHouse)
    // setNewHouse(createHouse(e))
    try {
      const addedHouse = await postHouse(newFormHouse)
      console.log({ addedHouse })
    } catch (error) {
      console.error('Error al agregar una nueva casa:', error)
    }
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='housePrice'>
        <input
          type='number'
          name='housePrice'
          placeholder='Precio de la casa'
          id='housePrice'
        />
      </label>
      <label htmlFor='houseTitle'>
        <input
          type='text'
          name='houseTitle'
          placeholder='Titulo de la casa'
          id='houseTitle'
        />
      </label>
      <label htmlFor='houseAddress'>
        <input
          type='text'
          name='houseAddress'
          placeholder='Direccion'
          id='houseAddress'
        />
      </label>
      <label htmlFor='houseDescription'>
        <input
          type='textarea'
          name='houseDescription'
          placeholder='Descripcion'
          id='houseDescription'
        />
      </label>
      <label htmlFor='houseDimention'>
        <input
          type='number'
          name='houseDimention'
          placeholder='Dimension'
          id='houseDimention'
        />
      </label>
      <label htmlFor='houseType'>
        <select
          name='houseType'
          id='houseType'
        >
          <option value='Lote'>Lote</option>
          <option value='Casa'>Casa</option>
          <option value='Terreno'>Terreno</option>
        </select>
      </label>
      <label htmlFor='houseLocation'>
        <select
          name='houseLocation'
          id='houseLocation'
        >
          <option value='Larroque'>Larroque</option>
          <option value='Irazusta'>Irazusta</option>
          <option value='Talitas'>Talitas</option>
          <option value='Carbo'>Carbo</option>
          <option value='Cuchilla'>Cuchilla</option>
        </select>
      </label>
      <label htmlFor='houseRealEstate'>
        <select
          name='houseRealEstate'
          id='houseRealEstate'
        >
          <option value='Perera'>Perera</option>
          <option value='Korell'>Korell</option>
          <option value='Zapata'>Zapata</option>
        </select>
      </label>
      <label htmlFor='houseImage'>
        <input type='text' name='houseImage' placeholder='Url de imagen' />
      </label>
      <button type='submit'>Agregar casa</button>
    </form>
  )
}
