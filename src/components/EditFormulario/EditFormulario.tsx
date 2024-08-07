'use client'
import React, { useState, ChangeEvent } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import apiHouses from '@/api'
import { EditFormularioProps, EditFormularioValues } from '@/types'

export default function EditFormulario({ permalink, price, title, address, description, dimention, type, location, realEstate, houseImage }: EditFormularioProps) {
	const { register, handleSubmit, control, setValue } = useForm<EditFormularioValues>({
		defaultValues: {
			price,
			title,
			address,
			description,
			dimention,
			type,
			location,
			realEstate,
			houseImage
		}
	});
	const [selectedFile, setSelectedFile] = useState<File | null>(null); // Estado para el archivo seleccionado
	const [imagePreview, setImagePreview] = useState<string | null>(houseImage !== 'undefined' ? houseImage : ''); // Estado para la vista previa de la imagen

	const router = useRouter();

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]; // Obtiene el archivo seleccionado
		if (file) {
			setSelectedFile(file); // Actualiza el estado selectedFile
			setImagePreview(URL.createObjectURL(file)); // Actualiza la vista previa de la imagen
			setValue('houseImage', file); // Almacena el archivo en react-hook-form
		}
	};

	const onSubmit = async (data: EditFormularioValues) => {
		const formData = new FormData();
		for (const key in data) {
			formData.append(key, data[key]);
		}

		if (selectedFile) {
			formData.append('houseImage', selectedFile); // Agrega el archivo al formData
		}

		try {
			const patchedHouse = await apiHouses.patchHouse(permalink, formData);
			if (patchedHouse) {
				router.refresh();
				router.push('/');
			} else {
				console.error('Error al traer patchedHouse');
			}
		} catch (error) {
			console.error(`Ha ocurrido un error ${error}`);
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit(onSubmit)} className="md:max-w-xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-6 border-8 border-emerald-800 p-4 bg-slate-100 ">
				<h2 className='font-semibold text-2xl'>Edicion de Casa</h2>

				<div className='grid lg:grid-cols-2 gap-y-2'>
					<div className='w-full group min-h-[300px] h-full'>
						<label htmlFor='housePrice'>
							<Input size={16}
								{...register('price')}
								type='number'
								placeholder='Precio casa'
								id='housePrice'
							/>
						</label>
						<label htmlFor='houseTitle'>
							<Input size={16}
								{...register('title')}
								type='text'
								placeholder='Titulo de la casa'
								id='houseTitle'
							/>
						</label>
						<label htmlFor='houseAddress'>
							<Input size={16}
								{...register('address')}
								type='text'
								placeholder='Direccion'
								id='houseAddress'
							/>
						</label>
						<label htmlFor='houseDescription'>
							<Input size={16}
								{...register('description')}
								type='textarea'
								placeholder='Descripcion'
								id='houseDescription'
							/>
						</label>
					</div>

					<div className='w-full group'>
						<label htmlFor='houseDimention'>
							<Input
								size={16}
								{...register('dimention')}
								type='number'
								placeholder='Dimension'
								id='houseDimention'
							/>
						</label>
						<label htmlFor='houseType'>
							<Controller
								name="type"
								control={control}
								render={({ field }) => (
									<Select {...field}>
										<SelectTrigger className="w-full bg-red">
											<SelectValue placeholder="Tipo" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Tipo</SelectLabel>
												<SelectItem key='Lote' value='Lote'>Lote</SelectItem>
												<SelectItem key='Casa' value='Casa'>Casa</SelectItem>
												<SelectItem key='Terreno' value='Terreno'>Terreno</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
						</label>
						<label htmlFor='houseLocation'>
							<Controller
								name="location"
								control={control}
								render={({ field }) => (
									<Select {...field}>
										<SelectTrigger className="w-full bg-red">
											<SelectValue placeholder="Ciudad" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Ciudad</SelectLabel>
												<SelectItem key='Larroque' value='Larroque'>Larroque</SelectItem>
												<SelectItem key='Irazusta' value='Irazusta'>Irazusta</SelectItem>
												<SelectItem key='Talitas' value='Talitas'>Talitas</SelectItem>
												<SelectItem key='Carbo' value='Carbo'>Carbo</SelectItem>
												<SelectItem key='Cuchilla' value='Cuchilla'>Cuchilla</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
						</label>
						<label htmlFor="houseRealEstate">
							<Controller
								name="realEstate"
								control={control}
								render={({ field }) => (
									<Select {...field}>
										<SelectTrigger className="w-full bg-red">
											<SelectValue placeholder="Inmobiliaria" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Inmobiliaria</SelectLabel>
												<SelectItem key='Perera' value='Perera'>Perera</SelectItem>
												<SelectItem key='Korell' value='Korell'>Korell</SelectItem>
												<SelectItem key='Zapata' value='Zapata'>Zapata</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
						</label>
						<label htmlFor='houseImage'>
							<Input
								type='file'
								name='houseImage'
								onChange={handleImageChange}
								id='houseImage'
								className='w-full'
							/>
						</label>
						{imagePreview && (
							<div className='mt-2'>
								<Image src={imagePreview} alt="Preview" className='max-w-full h-auto' />
							</div>
						)}
					</div>
				</div>
				<Button className='border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white transition duration-300 ease-in-out block p-2 bg-gray/20' variant="outline" type="submit">Actualizar</Button>
			</form>
		</div>
	)
}
