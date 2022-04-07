import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CreateWeatherMarkers from './weather-marker.js';
import CreatePSIMarkers from './psi-marker.js';

let xy = [1.3521,103.8198];
let fix_zoom = 11;
let viscosity = 1;

export function TwoHoursNowcast (props){
    return(
        <>
            <h2>2 hours forecast</h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11} zoomControl={false}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.dataArr?<CreateWeatherMarkers obj={props.dataArr} iconSize={18}/>: null}
            </MapContainer>
        </>
    )
}

export function TwentyfourHoursForecast (props){
    return(
        <>
            <h2>24 hours forecast</h2> 
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11} zoomControl={false}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.dataArr?<CreateWeatherMarkers obj={props.dataArr} iconSize={30}/>: null}
            </MapContainer>
        </>
    )
}

export function PSI(props){
    return(
        <>  
            <h2>24 hours PSI</h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={11} maxZoom={11} minZoom={11} zoomControl={false}
            maxBounds={[[1.3521, 103.5198], [1.3521, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {props.dataArr?<CreatePSIMarkers obj={props.dataArr} iconSize={40}/>: null}
            </MapContainer>
        </>
    )
}
