import {Suspense} from 'react'
import apiHouses from '@/api'
import ListHouses from './ListHouses/ListHouses';


export default async function page() {
	const listHouses = await apiHouses.listhouses();
	return (
		<Suspense fallback={<p>Cargando list Houses </p>}>
			{listHouses ? <ListHouses listHouses={listHouses} /> : null}
		</Suspense>
	)
}

