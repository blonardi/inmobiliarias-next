// components/HousesSection.tsx
'use client';

import React, { useState } from 'react';
import Card from '@/components/Card/Card';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { House } from '@/types';
import Pagination from '@/components/Pagination/Pagination';
//import useHousesData from '@/hooks/useHousesData';

const Map = dynamic(() => import('@/components/Maps/Map'), {
	loading: () => <p>Cargando mapa...</p>,
	ssr: false
});

interface HousesSectionProps {
	initialHouses: House[];
	totalPages: number;
	currentPage: number;
}

export default function HousesSection({ initialHouses, totalPages, currentPage }: HousesSectionProps) {
	const [houses] = useState(initialHouses);
	//const { properties, loading } = useHousesData(houses);
	console.log({ initialHouses })
	return (
		<section id='houses'>
			<div className='my-4 max-w-7xl mx-auto py-8 px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center flex-wrap'>
				{houses.length > 0 ? (
					houses.map((house) => (
						<Link key={house.permalink} href={`house/${house.permalink}`}>
							<Card
								price={house.price}
								title={house.title}
								address={house.address}
								dimention={house.dimention}
								type={house.type}
								location={house.location}
								realEstate={house.realEstate}
								houseImage={house.houseImage}
							/>
						</Link>
					))
				) : (
					<div className='flex justify-center items-center col-span-full'>
						<p className='text-center text-lg'>Lo sentimos, no hay inmuebles con esas características 🤔</p>
					</div>
				)}
			</div>

			<div className='pagination'>
				<Pagination totalPages={totalPages} currentPage={currentPage} />
			</div>

			<div className='renderHousesMap'>
				{houses.length > 0 ? (
					<Map houses={houses.filter(house => house.lat !== undefined && house.lon !== undefined)} />
				) : (
					<p>Cargando mapa...</p>
				)}
			</div>
		</section>
	);
}