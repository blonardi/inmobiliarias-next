// LeafletMap.jsx
import 'leaflet/dist/leaflet.css';
import { House } from '@/types';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { LatLngTuple } from 'leaflet';
import { housingIcon, leaveIcon } from '@/assets/imgs/customIcon';
import Image from 'next/image';
//import mapIcon from '../../../assets/imgs/maps-pin.svg';

interface LeafletMapProps {
	houses: House[];
}

//interface Property {
//	permalink: string;
//	title: string;
//	address: string;
//	location: string;
//	realEstate: string;
//	lat: number;
//	lon: number;
//}

const Map: React.FC<LeafletMapProps> = ({ houses }) => {
	const center: LatLngTuple = [-32.963494, -59.277450];
	//const { properties, loading } = useHousesData(houses);

	//if (loading) {
	//	return <div>Loading...</div>;
	//}


	return (
		<section className='py-4'>
			<MapContainer center={center} zoom={10} className='max-w-7xl mx-auto' style={{ height: '600px', width: '100%' }}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<MarkerClusterGroup chunkedLoading>
					{houses.map((house) => (
						<Marker key={house.permalink} position={[house.lat, house.lon]} icon={house.type === 'house' ? housingIcon : leaveIcon}>
							<Popup>
								<div style={{ textAlign: 'center' }}>
									<h3>{house.title}</h3>
									<p>{house.address}</p>
									<p>{house.description}</p>
									<p><strong>Price:</strong> ${house.price}</p>
									<Image src={house.houseImage} alt={house.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
								</div>
							</Popup>
						</Marker>
					))}
				</MarkerClusterGroup>
			</MapContainer>
		</section>
	);
};

export default Map;