'use client'
import React, { useState, ChangeEvent } from 'react'
//import './Form.css'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { House } from '@/types' 

interface EditFormularioProps extends Omit<House, 'id' | 'date'>{}

interface EditFormularioValues {
	price: House['price'],
	title: House['title'],
	address: House['address'],
	description: House['description'],
	dimention: House['dimention'],
	type: House['type'],
	location: House['location'],
	realEstate: House['realEstate'],
	houseImage: House['houseImage']

}

export default function EditFormulario({ permalink, price, title, address, description, dimention, type, location, realEstate, houseImage }: EditFormularioProps) {
	const [dataForm, setDataForm] = useState<EditFormularioValues>({
		price,
	  title,
	  address,
	  description,
	  dimention,
	  type,
	  location,
	  realEstate,
	  houseImage
	})
	//console.log(dataForm.realEstate)

	const router = useRouter()
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log("evento", e)
		const { name, value } = e.currentTarget
		console.log(name, value)
		setDataForm(prevState => ({
			...prevState,
			[name]: value
		}))
	}
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		//console.log(e)
		try {
			const res = await fetch(`http://localhost:3001/api/houses/${permalink}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataForm)
			})
			if (!res) {
				throw new Error('Failed to update House')
			}
			router.refresh()
			router.push('/')
		} catch (error) {
			console.error(`Ha ocurrido un error ${error}`)
		}
	}
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="md:max-w-xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-6 border-8 border-emerald-800 p-4 bg-slate-100 ">

				<h2 className='font-semibold text-2xl'>Edicion de Casa</h2>

				<div className='grid lg:grid-cols-2 gap-y-2'>
					<div className='w-full group min-h-[300px] h-full'>
						<label htmlFor='housePrice'>
							<Input size='lg' variant='flat'
								label="Precio"
								onChange={handleChange}
								value={dataForm.price}
								type='number'
								name='price'
								placeholder='Precio de la casa'
								id='housePrice'
							/>
						</label>
						<label htmlFor='houseTitle'>
							<Input size='lg' variant='flat'
								label="Titulo"
								onChange={handleChange}
								defaultValue={dataForm.title}
								type='text'
								name='title'
								placeholder='Titulo de la casa'
								id='houseTitle'
								classNames={{
									label: ["text-slate-900", "font-semibold"],
									input: [
										"bg-transparent",
										"text-black/90 dark:text-white/90",
										"placeholder:text-default-700/50",
									],
									inputWrapper: [
										"bg-slate-300"
									],
									//innerWrapper: "bg-slate-400",
								}}
							/>
						</label>
						<label htmlFor='houseAddress'>
							<Input size='lg' variant='flat'
								label="Direccion"
								onChange={handleChange}
								value={dataForm.address}
								type='text'
								name='address'
								placeholder='Direccion'
								id='houseAddress'
								classNames={{
									label: ["text-slate-900", "font-semibold"],
									input: [
										"bg-transparent",
										"text-black/90 dark:text-white/90",
										"placeholder:text-default-700/50",
									],
									inputWrapper: [
										"bg-slate-300"
									],
									//innerWrapper: "bg-slate-400",
								}}
							/>
						</label>
						<label htmlFor='houseDescription'>
							<Input size='lg' variant='flat'
								label="Descripcion"
								onChange={handleChange}
								value={dataForm.description}
								type='textarea'
								name='description'
								placeholder='Descripcion'
								id='houseDescription'
								classNames={{
									label: ["text-slate-900", "font-semibold"],
									input: [
										"bg-transparent",
										"text-black/90 dark:text-white/90",
										"placeholder:text-default-700/50",
									],
									inputWrapper: [
										"bg-slate-300"
									],
									//innerWrapper: "bg-slate-400",
								}}
							/>
						</label>
					</div>

					<div className='w-full group'>
						<label htmlFor='houseDimention'>
							<Input size='lg' variant='flat'
								label='Dimension'
								onChange={handleChange}
								value={dataForm.dimention}
								type='number'
								name='dimention'
								placeholder='Dimension'
								id='houseDimention'
								classNames={{
									label: ["text-slate-900", "font-semibold"],
									input: [
										"bg-transparent",
										"text-black/90 dark:text-white/90",
										"placeholder:text-default-700/50",
									],
									inputWrapper: [
										"bg-slate-300"
									],
									//innerWrapper: "bg-slate-400",
								}}
							/>
						</label>
						<label htmlFor='houseType'>
							<Select
								label="Tipo"
								onValueChange={(newType) => setDataForm({ ...dataForm, type: newType })}
								//value={dataForm.type}  // Valor actual del estado
								defaultValue={dataForm.type.toString()}  // Valor por defecto (igual al actual)
								name='type'
								id='houseType'
								data-te-select-init data-te-select-visible-options="3"
								className="rounded-md  text-black text-lg border-r-16 w-full"

							>
								<SelectTrigger className="w-full bg-red">
									<SelectValue placeholder="Tipo" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Tipo</SelectLabel>
										<SelectItem key='Lote' value='Lote'>
											Lote
										</SelectItem>
										<SelectItem key='Casa' value='Casa'>
											Casa
										</SelectItem>
										<SelectItem key='Terreno' value='Terreno'>
											Terreno
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</label>
						<label htmlFor='houseLocation'>
							<Select
								label="Ciudad"
								onValueChange={(newLocation) => setDataForm({ ...dataForm, location: newLocation })}
								//value={dataForm.location}
								defaultValue={dataForm.location.toString()}
								name='location'
								id='houseLocation'
								data-te-select-init data-te-select-visible-options="3"
							>
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
						</label>
						<label htmlFor="houseRealEstate">
							<Select
								label="Inmobiliaria"
								onValueChange={(newRealEstate) => setDataForm({ ...dataForm, realEstate: newRealEstate })}
								//value={dataForm.realEstate}
								defaultValue={dataForm.realEstate.toString()}
								name='realEstate'
								id='houseRealEstate'
								data-te-select-init data-te-select-visible-options="3"
								className="rounded-md text-black font-semibold text-lg border-r-16 w-64"
							>
								<SelectTrigger className="w-full bg-red">
									<SelectValue placeholder="Theme" />
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
						</label>
					</div>
					<Input variant='flat' onChange={handleChange}
						label="Imagen"
						value={dataForm.houseImage} type='text' name='houseImage' placeholder='Url de imagen' className='w-full' />
				</div>
				<Button className='border-lime-800 text-lime-800 hover:bg-lime-800 hover:text-white transition duration-300 ease-in-out block p-2 bg-gray/20' variant="outline" type="submit">Actualizar</Button>
			</form>
		</div>
	)
}
