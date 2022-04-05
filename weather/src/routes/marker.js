import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

const iconWeather= (iconSize) => new L.Icon({
    iconUrl: require('../assets/icons/icons8-partly-cloudy-day-80.png'),
    iconRetinaUrl: require('../assets/icons/icons8-partly-cloudy-day-80.png'),
    iconSize: new L.Point(iconSize)
});

function CreateMarkers(props) {

    return (
    <Marker position={props.obj[0].coordinate} icon={iconWeather(40)}>
        <Popup>
        {props.obj[0].location}
        </Popup>
    </Marker>
    )
}


export default CreateMarkers;
