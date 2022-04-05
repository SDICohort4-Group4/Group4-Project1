import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

const iconWeather= (iconSize) => new L.Icon({
    iconUrl: require('../assets/icons/icons8-partly-cloudy-day-80.png'),
    iconRetinaUrl: require('../assets/icons/icons8-partly-cloudy-day-80.png'),
    iconSize: new L.Point(iconSize)
});

function CreateMarkers(props) {
    
    function markers() {
        return(
            props.obj.map((ele, i) => {
                return(
                <Marker position={ele.coordinate} icon={iconWeather(40)}>
                    <Popup>
                    {ele.location}
                    </Popup>
                </Marker>
                )
            })

        )
    }

    return (
        <>
            {markers()}
        </>

    )
}


export default CreateMarkers;
