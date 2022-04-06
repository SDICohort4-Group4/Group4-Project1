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

export function TwoHoursNowcast (){
    // create markers with temp object as props to test
    return(
        <>
            <h2>This is the 2 hours forecast</h2>
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

export function TwentyfourHoursForecast (){
    return(
        <>
            <h2>This is the 24 hours forecast</h2>            
            <MapContainer center={[1.3521, 103.8198]} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    )
}

export function FourDaysForecast(){
    return(
        <>
            <h2>This is the 4 days forecast</h2>
        </>
    )
}

export function PSI(){
    return(
        <>
            <h2>This is the PSI</h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    )
}

export function UV(){
    return(
        <>
            <h2>This is the UV</h2>
        </>
    )
}