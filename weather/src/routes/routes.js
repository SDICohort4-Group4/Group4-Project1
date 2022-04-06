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

export function TwoHoursNowcast (xy, fix_zoom,viscosity){
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

export function PSI(){
    return(
        <>
            <h2>This is the PSI</h2>
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

export function FourDaysForecast(){
    return(
        <>  
            <div>
                <h2 className="container_headerbox">4-day Outlook</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Weather Icon</td>
                        <td>Put 1st Day Outlook from 4-day API call</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>Put 2nd Day Outlook from 4-day API call</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>Put 3rd Day Outlook from 4-day API call</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>Put 4th Day Outlook from 4-day API call</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export function UV(){
    return(
        <>
            <div>
                <div>
                    <h2 className="container_headerbox">UV INDEX</h2>
                </div>
                <div className="UVinfographic_container">
                    <div >
                        Put the UV API call here
                    </div>
                </div>
                <div >
                    <table className="UVlegend_container">
                        <thead >
                            <tr>
                                <th className="UVlegend_head" colSpan="2">Legend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{color: "#579C00", fontWeight: "bold"}}>
                                <td>0 - 2</td>
                                <td>Low</td>
                            </tr>
                            <tr style={{color: "#F8CE09", fontWeight: "bold"}}>
                                <td>3 - 5</td>
                                <td>Moderate</td>
                            </tr>
                            <tr style={{color: "#FF8400", fontWeight: "bold"}}>
                                <td>6 - 7</td>
                                <td>High</td>
                            </tr>
                            <tr style={{color: "#D80000", fontWeight: "bold"}}>
                                <td>8 - 10</td>
                                <td>Very High</td>
                            </tr>
                            <tr style={{color: "#7031A1", fontWeight: "bold"}}>
                                <td>Above 11</td>
                                <td>Extreme</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}