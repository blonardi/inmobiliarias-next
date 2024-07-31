// customIcon.ts
import { Icon } from 'leaflet'

export const housingIcon = new Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [38, 45], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

export const leaveIcon = new Icon({
  iconUrl: 'https://img.icons8.com/fluency/48/leaf.png', // Aquí va la URL del ícono de leave
  iconSize: [38, 45], // tamaño del ícono
  iconAnchor: [22, 94], // punto del ícono que corresponderá a la ubicación del marcador
  popupAnchor: [-3, -76] // punto desde el cual el popup debería abrirse en relación al iconAnchor
})
