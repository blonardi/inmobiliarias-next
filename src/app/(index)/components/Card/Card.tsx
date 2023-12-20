// import './card.css'
import { ItemCard } from '../../../components/ItemCard/ItemCard.jsx'
// import { Link } from 'react-router-dom'


interface CardProps {
  id: string;
  permalink: string;
  price: number;
  title: string;
  address: string;
  description: string;
  dimention: number;
  type: string;
  location: string;
  realEstate: string;
  houseImage: string;
}

const Card: React.FC<CardProps> = ({
  id,
  permalink,
  price,
  title,
  address,
  description,
  dimention,
  type,
  location,
  realEstate,
  houseImage
}) => {
  return (
    // <Link classNameName='card-link' key={permalink} href={`/house/${permalink}`}>


<article className="antialiased font-sans">
	<div className="max-w-6xl mx-auto">
					<div className="max-w w-full">
							<div className="bg-white flex flex-col shadow-xl rounded-lg overflow-hidden">
									<div className="bg-cover bg-center mb-4">
											<img className='w-full h-48 ' src={houseImage} alt={title} />
									</div>
									<section className='flex gap-2 px-4'>
										<div>
											<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{type}</span>
										</div>
										<div>
											<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{location}</span>
										</div>
										<div>
											<span className='bg-teal-600 rounded-full shadow-md font-semibold text-sm text-teal-50 block py-1 px-2'>{realEstate}</span>
										</div>
									</section>
									<div className="px-4 py-2">
											<p className="uppercase tracking-wide text-sm font-bold text-gray-700">{title}</p>
											<p className="text-3xl text-gray-900">${price}</p>
											<p className="text-gray-700">{address}, {location}</p>
									</div>
									<div className="flex px-4 py-3 border-t border-gray-300 text-gray-700">
											<div className="flex-1 inline-flex items-center">
													<svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
															<path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
													</svg>
													<p><span className="text-gray-900 font-bold">{dimention} m2</span></p>
											</div>
											<div className="flex-1 inline-flex items-center">		
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 fill-current mr-3">
											  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
												</svg>
												<p><span className="text-gray-900 font-bold">{type}</span></p>
											</div>
											<div className="flex-1 inline-flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600 fill-current mr-3">
												<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  											<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
												</svg>
												<p><span className="text-gray-900 font-bold">{realEstate}</span></p>
											</div>
									</div>
							</div>
			</div>
	</div>
</article>


    // </Link>
  )
}

export default Card