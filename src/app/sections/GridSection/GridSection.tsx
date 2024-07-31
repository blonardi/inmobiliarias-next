import React from 'react';
import houseImage from '@/assets/imgs/casa.jpg';
import loteImage from '@/assets/imgs/lote.jpg';
import terrenoImage from '@/assets/imgs/terreno.webp';
import contactImage from '@/assets/imgs/landscape.jpg';
import { StaticImageData } from 'next/image';

interface Card {
	title: string;
	description: string;
	image: StaticImageData;
}

const cards: Card[] = [
	{ title: 'Casas', description: 'Encuentra tu hogar ideal entre nuestras hermosas casas, diseñadas para ofrecerte confort y estilo en cada rincón.', image: houseImage },
	{ title: 'Lotes', description: 'Descubre nuestros lotes disponibles, perfectos para construir luego o disfrutar como terrenos de campo en un entorno inmejorable.', image: loteImage },
	{ title: 'Terrenos', description: 'Explora una variedad de terrenos ideales para construir el proyecto de tus sueños en las mejores ubicaciones.', image: terrenoImage },
	{ title: 'Contacto', description: '¿Tienes preguntas? Contáctanos para obtener más información y recibir la mejor asesoría personalizada.', image: contactImage }
];

export const GridSection: React.FC = () => {
	return (
		<section className='py-2'>
			<div className="mx-auto max-w-4xl justify-center bg-gray-100">
				<div className='flex flex-col gap-y-4 justify-between shadow-lg py-2 border rounded-md'>
					<div className='m-2'>
						<h3 className='text-4xl font-bold text-lime-700'>
							¿Qué ofrecemos?
						</h3>
					</div>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg max-w-4xl shadow-lg">
						{cards.map((card) => (
							<div
								key={card.title}
								className='flex relative justify-center items-center h-80 bg-cover bg-center rounded-lg transition-transform transform hover:scale-105 group'
								style={{ backgroundImage: `url(${card.image.src})` }}
							>
								<div className='flex flex-col items-center justify-center px-4 absolute inset-0 bg-black bg-opacity-70 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
									<h4 className='text-white text-xl font-bold'>{card.title}</h4>
									<p className='text-white'>{card.description}</p>
								</div>

							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

