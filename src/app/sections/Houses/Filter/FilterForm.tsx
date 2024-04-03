'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'
//import {Select, SelectSection, SelectItem} from "@nextui-org/react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { House } from '@/types' 

interface FilterFormProps {
  locations: House['location'][]; // Suponiendo que locations es un arreglo de strings
  types: House['type'][]; // Suponiendo que types es un arreglo de strings
  realEstates: House['realEstate'][]; // Suponiendo que realEstates es un arreglo de strings
}
interface FormValues {
  location: House['location'] | null; // Tipo para la ubicación, ubicación válida o null
  type: House['type'] | null; // Tipo para el tipo de casa, tipo válido o null
  realEstate: House['realEstate'] | null; // Tipo para la inmobiliaria, inmobiliaria válida o null
}

export default function FilterForm({locations, types, realEstates}: FilterFormProps) {
	const [values, setValues] = useState<FormValues>({
		location: null,
		type: null,
		realEstate: null
	})
	//console.log({types})
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const {replace} = useRouter()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const params = new URLSearchParams(searchParams)
		for(const [key,value] of Object.entries(values)){
			if(value !== null) {
				params.set(key, value)
			}else{
				params.delete(key)
			}
		}
		replace(`${pathname}?${params.toString()}`)
		//console.log(searchParams.get('location')?.toString())
	}
	
	//const handleSelectChange = (event) => {
	//	const {value, name} = event.target
	//	//console.log({name, value})
	//	setValues({...values, [name]:value})
	//}
	
	return (
				<form onSubmit={handleSubmit}>
				  <div className="container mx-auto flex flex-col md:flex-col lg:flex-row xl:flex-row  p-5 justify-center gap-4  items-center">
						
						<Select
							onValueChange={(newLocation) => setValues({ ...values, location: newLocation })}
							//value={dataForm.location}
							defaultValue={searchParams.get('location')?.toString()}
							name='location'
							data-te-select-init data-te-select-visible-options="3"
						>
							<SelectTrigger className="w-full min-w-[180px] lg:text-lg text-emerald-800 font-semibold p-6">
								<SelectValue placeholder="Ciudad" className='font-semibold text-slate-800'/>
							</SelectTrigger>
							<SelectContent className='bg-slate-300'>
								<SelectGroup>
									<SelectLabel>Ciudad</SelectLabel>
									{locations.map((location) => (
				        		<SelectItem className='text-emerald-800 font-semibold' key={location} value={location}>{location}</SelectItem>
				      		))}	
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select
							onValueChange={(newType) => setValues({ ...values, type: newType })}
							//value={dataForm.type}  // Valor actual del estado
							defaultValue={searchParams.get('type')?.toString()}  // Valor por defecto (igual al actual)
							name='type'
							data-te-select-init data-te-select-visible-options="3"
							className="rounded-md  text-black text-lg border-r-16 w-full"
						>
							<SelectTrigger className="w-full min-w-[180px] lg:text-lg text-emerald-800 font-semibold p-6">
								<SelectValue placeholder="Tipo" />
							</SelectTrigger>
							<SelectContent className='bg-slate-300'>
								<SelectGroup>
									<SelectLabel>Tipo</SelectLabel>
									{types.map((type) => (
				        		<SelectItem className='text-emerald-800 font-semibold' key={type} value={type}>{type}</SelectItem>
				      		))}	
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select
							onValueChange={(newRealEstate) => setValues({ ...values, realEstate: newRealEstate })}
							//value={dataForm.realEstate}
							defaultValue={searchParams.get('realEstate')?.toString()}
							name='realEstate'
							data-te-select-init data-te-select-visible-options="3"
							//className="rounded-md text-black font-semibold text-lg border-r-16 w-64"
						>
							<SelectTrigger className="w-full min-w-[180px] lg:text-lg text-emerald-800 font-semibold p-6">
								<SelectValue placeholder="Inmobiliaria" />
							</SelectTrigger>
							<SelectContent className='bg-slate-300'>
								<SelectGroup>
									<SelectLabel>Inmobiliaria</SelectLabel>
									{realEstates.map((realEstate) => (
				        		<SelectItem className='text-emerald-800 font-semibold' key={realEstate} value={realEstate}>{realEstate}</SelectItem>
				      		))}
								</SelectGroup>
							</SelectContent>
						</Select>
						
						<Button size="lg" type="submit" variant="custom" >Buscar</Button>
		  		</div>
				</form>
	)
}
