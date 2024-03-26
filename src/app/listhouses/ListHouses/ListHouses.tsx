import EditCard from '@/app/components/EditCard/EditCard'

export default async function ListHouses({listHouses}) {	
	return (		
		<div className='container'>
			<div className="md:max-w-xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-8">
				<header>
					<h2 className='text-center font-semibold text-4xl'>Lista de Casas</h2>
				</header>
				<section className='flex flex-col items-center justify-center gap-y-6'>
					{listHouses.length > 0 ? (
						listHouses.map(({permalink, houseImage, title, price, address, description}) => ( 
							<EditCard key={permalink} houseImage={houseImage} title={title} price={price} address={address} description={description} permalink={permalink} />
					))) :
						<p>Error, no hay casas para renderizar.</p>
					}
				</section>
			</div>
		</div>
	)
}
