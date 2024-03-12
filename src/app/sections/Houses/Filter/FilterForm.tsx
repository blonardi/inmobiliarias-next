'use client'
import {useState} from 'react'
import {Select, SelectSection, SelectItem, Button} from "@nextui-org/react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default function FilterForm({locations, types, realEstates}) {
	const [values, setValues] = useState({
		location: null,
		type: null,
		realEstate: null
	})
	
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const {replace} = useRouter()

	const handleSubmit = (event) => {
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
		console.log(searchParams.get('location')?.toString())
	}
	
	const handleSelectChange = (event) => {
		const {value, name} = event.target
		//console.log({name, value})
		setValues({...values, [name]:value})
	}
	
	return (
				<form onSubmit={handleSubmit}>
				  <div className="container mx-auto flex flex-row flex-wrap p-5 justify-center gap-4 sm:flex-row md:flex-col lg:flex-row items-center">
						<div>
							<Select onChange={handleSelectChange} value={searchParams.get('location')} id="location" name='location' label="Ciudad"  data-te-select-init data-te-select-visible-options="3" className="rounded-md border text-black text-lg border-r-16 w-64">
					      	{locations.map((location) => (
					        <SelectItem key={location} value={location}>{location}</SelectItem>
					      	))}					
							</Select>
						</div>
						<div>
							<Select onChange={handleSelectChange} value={searchParams.get('type')?.toString()} id='type' name='type'
	          		label="Tipo"  data-te-select-init data-te-select-visible-options="3" className="rounded-md border text-black text-lg border-r-16 w-64">
					      	{types.map((type) => (
					        <SelectItem key={type} value={type}>{type}</SelectItem>
					      	))}					
							</Select>
						</div>
						<div>
							<Select
								onChange={handleSelectChange} value={searchParams.get('realEstate')?.toString()} id='realEstate' name='realEstate'
	          		label="Inmobiliaria"  data-te-select-init data-te-select-visible-options="3" className="rounded-md border text-black text-lg border-r-16 w-64">
					      	{realEstates.map((realEstate) => (
					        <SelectItem key={realEstate} value={realEstate}>{realEstate}</SelectItem>
					      	))}					
							</Select>
						</div>
						<Button color="default" type="submit" variant="ghost" className="p-2 bg-gray/20">Search</Button>
		  		</div>
				</form>
	)
}
