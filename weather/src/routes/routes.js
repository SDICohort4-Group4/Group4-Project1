import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function TwoHoursNowcast (){
    return(
        <>
            <h2>This is the 2 hours forecast</h2>
            <MapContainer center={[1.3521, 103.8198]} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[1.3521, 103.8198]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
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