// LeafletMap.jsx
'use client'
import 'leaflet/dist/leaflet.css'
import { House } from '@/types';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
//import apiHouses from "@/api"



interface LeafletMapProps {
  houses: House[];
}

//CHECK TYPESCRIPT
const Map: React.FC<LeafletMapProps> = ({ houses }) => {
  const center : LatLngTuple = [-32.37687083761592, -59.07598859776726]; // Define el centro inicial o calcula uno basado en las casas.

  return (
		<section className='py-4'>
	    <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
	      <TileLayer
	        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	      />
	      {/*{houses.map((house:House) => (
	        <Marker key={house.id} position={[house.lat, house.lng]}>
	          <Popup>{house.title}</Popup>
	        </Marker>
	      ))}*/}
	    </MapContainer>
		</section>
  );
};

export default Map;
