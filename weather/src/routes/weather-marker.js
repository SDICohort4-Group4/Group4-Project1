import L from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet'

const iconWeather= (weather, iconSize) => {
    let weatherIcon;
    switch(weather) {
        case "Heavy Rain":
        case "Moderate Rain":
        case "Light Rain":
        case "Showers":
            weatherIcon = 'rain.png'
            break;
        case "Partly Cloudy (Night)":
            weatherIcon = 'partial-cloudy-night.png'
            break;           
        case "Partly Cloudy (Noon)": 
        case "Partly Cloudy (Day)":
        case "Cloudy":
            weatherIcon = 'partial-cloudy-day.png'
            break;
        case "Heavy Thundery Showers":
        case "Thundery Showers":
            weatherIcon = 'storm.png'
            break;
        case "Fair (Day)":
        case "Fair (Noon)":
        case "Fair (Night)":    
        case "Sunny":
            weatherIcon = 'wi-sunny.png';
            break;
        default:
            // console.log(weather)
            weatherIcon = 'sad-sun.png'
    }

    return new L.Icon({
        iconUrl: require('../assets/icons/' + weatherIcon),
        iconSize: (iconSize),
        iconAnchor: [7, iconSize],
        tooltipAnchor:[0, 0],
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
                        {ele.name}: {ele.forecast}
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
