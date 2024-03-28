'use client'
import apiHouses from '@/api'
import { FormValues } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
// import { FormEvent } from 'react'
// import { register } from 'module'


const validateUrl = (value: string): boolean => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:'
  } catch (error) {
    return false
  }
}

export default function FormPage () {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
	const router = useRouter()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // funcion de post
		console.log(data)
		try {
      const createdHouse = await apiHouses.postHouse(data);
      console.log('Casa creada con éxito:', createdHouse);
			router.push('/')
      // Puedes realizar acciones adicionales después de crear la casa
    } catch (error) {
      console.error('Error al crear la casa:', error);
			router.push('/')
      // Manejo de errores, muestra un mensaje al usuario, etc.
    }
  };


  return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-1/2 py-6 grid gap-2 items-center justify-center rounded-md mx-auto my-16 bg-slate-200'>
			<h2 className='text-xl text-bold text-sky-800 font-bold block w-full'>Formulario carga de inmuebles</h2>
			<div className=' bg-slate-700 py-4 px-4 border rounded-md'>
				<div className='flex gap-5'>
		      <label htmlFor='price' className='flex flex-col my-2 text-white w-full'>
						Precio
		        <input
		          type='number'
		          // name='housePrice'
		          placeholder='Precio de la casa'
		          id='price'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('price', {
							  minLength: {
							    value: 4,
							    message: 'El precio debe tener al menos 3 digitos'
							  },
							  maxLength: {
							    value: 10,
							    message: 'El precio debe ser menor a 10 digitos'
							  },
							  required: { value: true, message: 'Precio es requerido' }
							})}
		        />
					{errors.price && <span className=' block w-auto text-orange-600 text-md'>{errors.price.message}</span>}
		      </label>
		      <label htmlFor='title' className='flex flex-col my-2 text-white w-1/3'>
						Titulo
		        <input
		          type='text'
		          // name='houseTitle'
		          placeholder='Titulo de la casa'
		          id='title'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('title', {
							  minLength: {
							  value: 2, message: 'El titulo debe tener entre 6 y 30 letras'
							  },
							  maxLength: {
							  value: 30,
							  message: 'El nombre debe tener menos de 30 letras'
							  },
							  required: { value: true, message: 'Nombre es requerido' }
							})}
		        />
					{errors.title && <span className=' block w-auto text-orange-600 text-md'>{errors.title.message}</span>}
		      </label>
		      <label htmlFor='address' className='flex flex-col my-2 text-white w-1/3'>
						Direccion
		        <input
		          type='text'
		          // name='houseAddress'
		          placeholder='Direccion'
		          id='address'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('address', {
							  minLength: {
							  value: 8, message: 'La direccion debe tener minimo 8 letras'
							  },
							  maxLength: {
							  value: 30, message: 'La direccion debe tener como limie 30 letras'
							  },
							  required: { value: true, message: 'Direccion es requerida' }
							})}
		        />
						<p className="text-gray-200 text-xs italic">Ej: 9 de Julio 1816</p>
					{errors.address && <span className=' block w-auto text-orange-600 text-md'>{errors.address.message}</span> }
		      </label>
		      </div>
				<div className='flex gap-5'>
					<label htmlFor='location' className='flex flex-col my-2 text-white w-1/3'>
						Localidad
		        <select
		          // name='houseLocation'
		          id='location'
							className='py-3 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('location', { required: true })}
		        >
							<option value="default" disabled>Elige la ciudad..</option>
		          <option value='Larroque'>Larroque</option>
		          <option value='Irazusta'>Irazusta</option>
		          <option value='Talitas'>Talitas</option>
		          <option value='Carbo'>Carbo</option>
		          <option value='Cuchilla'>Cuchilla</option>
		        </select>
		      </label>
		      <label htmlFor='realEstate' className='flex flex-col my-2 text-white w-1/3'>
						Inmobiliaria
		        <select
		          // name='houseRealEstate'
		          id='realEstate'
							className='py-3 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('realEstate', { required: true })}
		        >
							<option value="default" disabled>Elige la inmobiliaria..</option>
		          <option value='Perera'>Perera</option>
		          <option value='Korell'>Korell</option>
		          <option value='Zapata'>Zapata</option>
		        </select>
		      </label>
					<label htmlFor='type' className='flex flex-col my-2 text-white w-1/3'>
						Tipo:
		        <select
		          // name='houseType'
		          id='type'
							className='py-3 px-6 text-md font-bold bg-slate-300 text-black'
							{...register('type', { required: true })}
		        >
							<option value="default" disabled>Elige el tipo..</option>
		          <option value='Lote'>Lote</option>
		          <option value='Casa'>Casa</option>
		          <option value='Terreno'>Terreno</option>
		        </select>
		      </label>
				</div>
				<div className='flex gap-5'>
		      <label htmlFor='houseImage' className='flex flex-col my-2 text-white w-1/2'>
						Imagen
		        <input type='text'
						//  name='houseImage'
							id='houseImage'
							placeholder='Url de imagen' className='py-2 px-6 text-md font-bold bg-slate-300 text-black' {...register('houseImage', {
							required: {value: true, message: 'Imagen es requerida'},
							validate: (value) => validateUrl(value) ||
							'Ingrese una imagen válida con el protocolo HTTPS.',
							})
							}
						/>
						{errors.houseImage && <span className=' block w-auto text-orange-600 text-md'>{errors.houseImage.message}</span> }
		      </label>
					<label htmlFor='dimention' className='flex flex-col my-2 text-white w-1/2'>
						Dimension
		        <input
		          type='number'
		          // name='houseDimention'
		          placeholder='Dimension'
		          id='dimention'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black w-full'
							{...register('dimention', { minLength: { value: 2, message: 'La dimension debe tener al menos 2 digitos' }, maxLength: { value: 6, message: 'La dimension debe tener maximo 6 digitos' }, required: true })}
		        />
					{errors.dimention && <span className=' block w-auto text-orange-600 text-md'>{errors.dimention.message}</span> }
		      </label>
				</div>
				<label htmlFor='description' className='flex flex-col my-2 text-white'>
						Descripcion
		        <textarea
		          // name='houseDescription'
		          placeholder='Descripcion'
		          id='description'
						className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
						{...register('description', { minLength: { value: 10, message: 'La descripcion debe tener mas de 10 letras' }, maxLength: { value: 80, message: 'La descripcion debe tener maximo de 60 letras' }, required: {value: true, message:'Una breve descripcion es requerida'} })}
		        />
					{errors.description && <span className=' block w-auto text-orange-600 text-md'>{errors.description.message}</span> }
		      </label>
	      <button type='submit' className='my-4 py-2 px-4 border rounded-md bg-cyan-800 text-white font-bold w-full'>Agregar casa</button>
			</div>
		</form>
  )
}
