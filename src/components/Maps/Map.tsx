// LeafletMap.jsx
'use client'
import 'leaflet/dist/leaflet.css';
import { House } from '@/types';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon, LatLngTuple } from 'leaflet';
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
  const center: LatLngTuple = [-32.37687083761592, -59.07598859776726];
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const transformedPropertiesData = houses.map((property) => {
        return {
          permalink: property.permalink,
          title: property.title,
          address: property.address,
          location: property.location,
          realEstate: property.realEstate,
          lat: 0,
          lon: 0,
        };
      });
      setProperties(transformedPropertiesData);
    };
    fetchData();
  }, [houses]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const state = 'Entre Rios';
      try {
        const updatedProperties = await Promise.all(
          properties.map(async (property) => {
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                  `${property.address}, ${property.location}, ${state}`
                )}`
              );
              const data = await response.json();
              if (data.length > 0) {
                const { lat, lon } = data[0];
                return { ...property, lat, lon };
              } else {
                console.log('No coordinates found');
                return property;
              }
            } catch (error) {
              console.error('Error al obtener coordenadas:', error);
              return property;
            }
          })
        );
        setProperties(updatedProperties);
      } catch (error) {
        console.error(error);
      }
    };

    if (properties.length > 0) {
      fetchCoordinates();
    }
  }, [properties]);

  //const customIcon = new Icon({
  //  iconUrl: mapIcon,
  //  iconSize: [32, 32],
  //});

	const housingIcon = new Icon({
    iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
    iconSize: [38, 45], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

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