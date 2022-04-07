import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CreateWeatherMarkers from './weather-marker.js';
import CreatePSIMarkers from './psi-marker.js';


export function TwoHoursNowcast (props){
    return(
        <>
            <h2>2 hours forecast</h2>
            <MapContainer center={[1.339, 103.8198]} zoom={11} maxZoom={11} minZoom={11} zoomControl={false}
            maxBounds={[[1.339, 103.5198], [1.339, 104.1198]]} maxBoundsViscosity={1}>
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
            <MapContainer center={[1.339, 103.8198]} zoom={11} maxZoom={11} minZoom={11} zoomControl={false}
            maxBounds={[[1.339, 103.5198], [1.339, 104.1198]]} maxBoundsViscosity={1}>
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
            <div className='map-psi-container'>
            <MapContainer center={[1.339, 103.8198]} zoom={10.5} maxZoom={10.5} minZoom={10.5} zoomControl={false}
            maxBounds={[[1.339, 103.5198], [1.339, 104.1198]]} maxBoundsViscosity={1}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {props.dataArr?<CreatePSIMarkers obj={props.dataArr} iconSize={40}/>: null}
            </MapContainer>
            <div className="legend">
                <table>
                    <tr>
                        <th>PSI</th>
                        <th>Air Quality</th>
                    </tr>
                    <tr>
                        <td>0 - 50</td>
                        <td>Good</td>
                    </tr>
                    <tr>
                        <td>51 - 100</td>
                        <td>Moderate</td>
                    </tr>
                    <tr>
                        <td>101 - 200</td>
                        <td>Unhealthy</td>
                    </tr>
                    <tr>
                        <td>201 - 300</td>
                        <td>Very Unhealthy</td>
                    </tr>
                    <tr>
                        <td>Above 300</td>
                        <td>Hazardous</td>
                    </tr>
                </table>
            </div>
            </div>
        </>
    )
}
