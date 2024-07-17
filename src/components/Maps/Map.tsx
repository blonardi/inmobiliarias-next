// LeafletMap.jsx
'use client'
import 'leaflet/dist/leaflet.css';
import { House } from '@/types';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, LatLngTuple } from 'leaflet';
import useHousesData from '@/app/hooks/useHousesData';
import housingIcon from '@/app/assets/imgs/customIcon';
//import mapIcon from '../../../assets/imgs/maps-pin.svg';

interface LeafletMapProps {
	houses: House[];
}

interface Property {
	permalink: string;
	title: string;
	address: string;
	location: string;
	realEstate: string;
	lat: number;
	lon: number;
}

const Map: React.FC<LeafletMapProps> = ({ houses }) => {
	const center: LatLngTuple = [-32.963494, -59.277450];
	const { properties, loading } = useHousesData(houses);

	if (loading) {
		return <div>Loading...</div>;
	}



	return (
		<section className='py-4'>
			<MapContainer center={center} zoom={10} style={{ height: '600px', width: '100%' }}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<MarkerClusterGroup chunkedLoading>
					{properties.map((property) => (
						<Marker key={property.permalink} position={[property.lat, property.lon]} icon={housingIcon}>
							<Popup>
								<p>{property.title}</p>
							</Popup>
						</Marker>
					))}
				</MarkerClusterGroup>
			</MapContainer>
		</section>
	);
};

export default Map;