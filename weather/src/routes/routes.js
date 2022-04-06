import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import CreateMarkers from './marker.js'


let testObj = [
    {location: "north", forecast:{weather: "sunny"}},
    {location: "south", forecast:{weather: "sunny"}},
    {location: "east", forecast:{weather: "sunny"}},
    {location: "west", forecast:{weather: "rainny"}},
    {location: "central", forecast:{weather: "sunny"}}
]

let xy = [1.3521,103.8198];
let fix_zoom = 11;
let viscosity = 1;

export function TwoHoursNowcast (props){
    return(
        <>
            <h2>This is the 2 hours forecast:
            {props.twohourData.forecasts===undefined ? null 
            :
            (props.twohourData.forecasts[0].forecast)
            }
            </h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CreateMarkers obj={testObj}/>
            </MapContainer>
        </>
    )
}

export function TwentyfourHoursForecast (props){
    return(
        <>
            <h2>This is the 24 hours forecast: 
            {props.twentyfourhourData.general===undefined ? null
            : 
            (props.twentyfourhourData.general.forecast)
            }        
            </h2> 
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    )
}

export function PSI(props){
    return(
        <>  
            <h2>This is the PSI:
            {props.psiData.readings===undefined ? null 
            :  
             (props.psiData.readings.psi_twenty_four_hourly.national)
            }
            </h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    )
}
