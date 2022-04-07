import React from 'react';
import {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    NavLink,
} from 'react-router-dom';
import '../assets/styles/styles.css'
import {TwoHoursNowcast, TwentyfourHoursForecast, PSI} from '../routes/routes';
import GetNEAData from '../components/GetNEAData';
import UVDisplay from "../routes/UVDisplay";
import FourDaysForecast from "../routes/FourDaysForecast"
import Get4DUV from '../components/Get4DUV';

function Home() {

    const [uvData, setUVData]=useState({});
    const [mapData, setMapData]=useState({});
    const [fourdayData, setfourdayData]=useState({});
 
    function getUVData(data) {
        console.log("uv", data)
        setUVData(data);
    }

    function getMapData(data) {
        console.log("map",data)
        setMapData(data);
    }

    function getfourdayData(data) {
        console.log("4d", data)
        setfourdayData(data);
    }


    return (
        <>
            <Router basename = '/Group4-Project1'>
                
                <GetNEAData getData={getMapData} />
                <Get4DUV getUV={getUVData} get4D={getfourdayData} />
                <div className="mapArea">
                    <Switch>
                        <Route className='leaflet-container' path='/2hrs'>
                            {/* <GetNEAData dataType="2hour" getData={gettwohourData} /> */}
                            {Object.keys(mapData).length !== 0? <TwoHoursNowcast dataArr={mapData}/>: <TwoHoursNowcast />}
                        </Route>
                        <Route className='leaflet-container' path='/24hrs'>
                            {/* <GetNEAData dataType="24hour" getData={gettwentyfourhourData}/> */}
                            {Object.keys(mapData).length !== 0?<TwentyfourHoursForecast dataArr={mapData}/>: <TwentyfourHoursForecast />}
                        </Route>
                        <Route className='leaflet-container' path='/PSI'>
                            {/* <GetNEAData dataType="psi" getData={getPsiData}/> */}
                            {Object.keys(mapData).length !== 0? <PSI dataArr={mapData}/>: <PSI />}
                        </Route>
                        <Route exact path='/'>
                            {/* <GetNEAData dataType="2hour" getData={gettwohourData}/> */}
                            {Object.keys(mapData).length !== 0? <TwoHoursNowcast dataArr={mapData}/>: <TwoHoursNowcast />}
                        </Route>
                    </Switch>
                </div>
            </Router>
            <div className="information">
                <div className="container">
                    <div >
                        {/* <GetNEAData dataType="4day" getData={getfourdayData}/> */}
                        <FourDaysForecast fourdayData={fourdayData}/>
                    </div>
                </div>
                <div className="container">
                    <div className="UVcontainer">
                        {/* <GetNEAData dataType="uvindex" getData={getUVData}/> */}
                        <UVDisplay uvData={uvData}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;