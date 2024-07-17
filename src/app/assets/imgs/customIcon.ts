// customIcon.ts
import { Icon } from 'leaflet';

const housingIcon = new Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [38, 45], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default housingIcon;
