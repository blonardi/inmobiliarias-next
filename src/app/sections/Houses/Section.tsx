// pages/houses.tsx o app/houses/page.tsx (dependiendo de tu estructura de carpetas)

import { House } from '@/types';
import apiHouses from '@/api';
import HousesSection from '@/app/sections/Houses/HousesSection';

interface PageProps {
	searchParams?: {
		location?: House['location'] | '';
		type?: House['type'] | '';
		realEstate?: House['realEstate'] | '';
		page?: string;
	};
}

export default async function HousesContainer({ searchParams }: PageProps) {
	const { location = '', type = '', realEstate = '', page = '1' } = searchParams || {};
	const currentPage = Number(page) || 1;
	const { houses, totalPages } = await apiHouses.getHousesFiltered(
		location,
		type,
		realEstate,
		currentPage
	);

	return (
		<HousesSection
			initialHouses={houses}
			totalPages={totalPages}
			currentPage={currentPage}
		/>
	);
}