'use client'
import apiHouses from '@/api'
import { FormValues } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
//import Image from 'next/image'

export default function FormPage() {
	const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>();
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const router = useRouter();

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue('houseImage', file as any);
			setPreviewUrl(URL.createObjectURL(file));
		}
	};

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const formData = new FormData();

		Object.keys(data).forEach((key) => {
			if (key === 'houseImage' && data[key]) {
				formData.append(key, data[key] as File)
			} else {
				formData.append(key, data[key as keyof FormValues].toString());
			}
		});

		for (const [key, value] of formData.entries()) {
			console.log(`${key}:`, value);
		}


		try {
			const createdHouse = await apiHouses.postHouse(formData);
			console.log('Casa creada con éxito:', createdHouse);
			router.push('/');
		} catch (error) {
			console.error('Error al crear la casa:', error);
			throw new Error("Error al crear la casa");
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
						{errors.address && <span className=' block w-auto text-orange-600 text-md'>{errors.address.message}</span>}
					</label>
				</div>
				<div className='flex gap-5'>
					<label htmlFor='location' className='flex flex-col my-2 text-white w-1/3'>
						Localidad
						<select
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
						<input
							type='file'
							id='houseImage'
							accept='image/*'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
							onChange={onFileChange}
						/>
						{errors.houseImage && <span className='block w-auto text-orange-600 text-md'>{errors.houseImage.message}</span>}
						{previewUrl && <Image width={200} height={200} src={previewUrl} alt="Preview" className="mt-2 max-w-xs" />}
					</label>
					<label htmlFor='dimention' className='flex flex-col my-2 text-white w-1/2'>
						Dimension
						<input
							type='number'
							placeholder='Dimension'
							id='dimention'
							className='py-2 px-6 text-md font-bold bg-slate-300 text-black w-full'
							{...register('dimention', {
								minLength: { value: 2, message: 'La dimension debe tener al menos 2 digitos' },
								maxLength: { value: 6, message: 'La dimension debe tener maximo 6 digitos' },
								required: true
							})}
						/>
						{errors.dimention && <span className=' block w-auto text-orange-600 text-md'>{errors.dimention.message}</span>}
					</label>
				</div>
				<label htmlFor='description' className='flex flex-col my-2 text-white'>
					Descripcion
					<textarea
						placeholder='Descripcion'
						id='description'
						className='py-2 px-6 text-md font-bold bg-slate-300 text-black'
						{...register('description', {
							minLength: { value: 10, message: 'La descripcion debe tener mas de 10 letras' },
							maxLength: { value: 80, message: 'La descripcion debe tener maximo de 60 letras' },
							required: { value: true, message: 'Una breve descripcion es requerida' }
						})}
					/>
					{errors.description && <span className=' block w-auto text-orange-600 text-md'>{errors.description.message}</span>}
				</label>
				<button type='submit' className='my-4 py-2 px-4 border rounded-md bg-cyan-800 text-white font-bold w-full'>Agregar casa</button>
			</div>
		</form>
	)
}
