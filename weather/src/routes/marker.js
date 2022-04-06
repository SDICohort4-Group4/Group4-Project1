import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

const iconWeather= (weather) => {
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

        
    }

    return new L.Icon({
        iconUrl: require('../assets/icons/' + weatherIcon),
        iconSize: new L.Point(15,15),
        popupAnchor: [5, -7],
        className: "icon-style"
    });
}

const locationCoor = (location) => {
    let coordinate;
    switch(location) {
        case "north": 
            coordinate = [1.432, 103.786528];
            break;
        case "south": 
            coordinate = [1.277, 103.819];
            break;
        case "east":
            coordinate = [1.345, 103.944];
            break;
        case "west":
            coordinate = [1.34039, 103.705];
            break;
        case "central":
            coordinate = [1.350772, 103.839];
            break;           
        default:
            alert(`${coordinate} is not defined`)
            return
    }
    return coordinate;
}



function CreateMarkers(props) {
    function markers() {
        // return array of markers
        return(
            props.obj.map((ele, i) => {
                return(
                <Marker key={i} position={ele.coordinate} icon={iconWeather(ele.forecast)}>
                    <Popup>
                    {ele.name}
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
