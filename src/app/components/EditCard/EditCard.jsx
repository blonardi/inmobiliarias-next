'use client'
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import RemoveBtn from '@/app/components/RemoveBtn/RemoveButton'
import { HiPencilAlt } from 'react-icons/hi'
export default function App({ permalink, houseImage, title, price, address, description }) {
	return (
		<Card key={permalink} className="md:min-w-[600px] max-w-[400px]">
			<CardHeader className="flex justify-between">
				<section className="flex gap-3">
					<Image
						alt={`Imagen de casa ${title}`}
						height={100}
						radius="md"
						src={houseImage}
						width={100}
					/>
					<div className="flex flex-col">
						<p className="text-md">Nombre: {title}</p>
						<p className="text-small text-default-500">Precio: {price}</p>
						<p className="text-small text-default-500">Direccion: {address}</p>
					</div>
				</section>
				<div>
					<RemoveBtn permalink={permalink} />
					<Link href={`editHouse/${permalink}`}>
						<HiPencilAlt size={24} />
					</Link>
				</div>
			</CardHeader>
			<Divider />
			<CardBody>
				<p>{description}</p>
			</CardBody>
			<Divider />
		</Card>
	);
}
