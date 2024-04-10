'use client'
import apiHouses from '@/api'
import { Suspense } from 'react'
import EditHouse from './EditHouse/EditHouse'
import { House } from '@/types'


export default async function page({ params: { permalink } }: { params: { permalink: House['permalink'] } }){
	const house = await apiHouses.getHouse(permalink)

	return <>
			<div className='bg-slate-400 h-screen'>
				<Suspense fallback={<p>Cargando componente formulario de edicion</p>}>
					{house ? <EditHouse house={house}/> : <h2 className='text-center m-auto text-3xl text-blue-950'>ERROR no se ha podido traer la casa para modificar.</h2>}
				</Suspense>
			</div>
	</>

}