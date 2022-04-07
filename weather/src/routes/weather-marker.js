import L from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet'

const iconWeather= (weather, iconSize) => {
    let weatherIcon;
    switch(weather) {
        case "Moderate Rain":
            weatherIcon = 'partial-cloudy.png'
            break;
        case "Light Rain":
            weatherIcon = 'rain.png'
            break;
        case "Cloudy":
            weatherIcon = 'partial-cloudy.png'
            break;
        case "Thundery Showers":
            weatherIcon = 'partial-cloudy.png'
            break;
        default:
            weatherIcon = 'partial-cloudy.png'
    }

    return new L.Icon({
        iconUrl: require('../assets/icons/' + weatherIcon),
        iconSize: (iconSize),
        iconAnchor: [7, iconSize],
        popupAnchor: [iconSize/2, -(iconSize/2)],
        className: "icon-style"
    });
}



function CreateWeatherMarkers(props) {
    function markers() {
        // return array of markers
        if (props.obj) {
            return(
                props.obj.map((ele, i) => {
                    return(
                    <Marker key={i} position={ele.coordinate} icon={iconWeather(ele.forecast, props.iconSize)}>
                        <Tooltip>
                        {ele.name}
                        </Tooltip>
                    </Marker>
                    )
                })
            )
        }

    }

    return (
        <>
            {markers()}
        </>

    )
}


export default CreateWeatherMarkers;
