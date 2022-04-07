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


function Home() {

    const [uvData, setUVData]=useState({});
    const [mapData2Hr, setMapData2Hr]=useState({});
    const [mapData24Hr, setMapData24Hr]=useState({});
    const [mapDataPsi, setMapDataPsi]=useState({});
    const [fourdayData, setfourdayData]=useState({});
 
    function getUVData(data) {
        // console.log("uv", data) for debugging
        setUVData(data);
    }

    function getMapData2Hr(data) {
        // console.log("map",data) for debugging
        setMapData2Hr(data);
    }

    function getMapData24Hr(data) {
        // console.log("map",data) for debugging
        setMapData24Hr(data);
    }

    function getMapDataPsi(data) {
        // console.log("map",data) for debugging
        setMapDataPsi(data);
    }

    function getfourdayData(data) {
        // console.log("4d", data) for debugging
        setfourdayData(data);
    }


    return (
        <>
            <Router basename = '/Group4-Project1'>
            <div className='navBar'>
                <div>
                    <NavLink  className='link' to ='/2hrs'>2 Hrs</NavLink>
                    <NavLink  className='link'to ='/24hrs'>24 Hrs</NavLink>
                    {/* <NavLink className='link'to ='/4days'>4 Days</NavLink> */}
                    <NavLink  className='link'to ='/PSI'>PSI</NavLink>
                    {/* <NavLink className='link'to ='/UV'>UV</NavLink> */}
                    <Link  to='/'></Link>
                </div>
            </div>
                <GetNEAData getUV={getUVData} get4D={getfourdayData} get2HrData={getMapData2Hr} get24HrData={getMapData24Hr} getPsiData={getMapDataPsi}/>
                <div className="mapArea">
                    <Switch>
                        <Route className='leaflet-container' path='/2hrs'>
                            {/* <GetNEAData dataType="2hour" getData={gettwohourData} /> */}
                            {Object.keys(mapData2Hr).length !== 0? <TwoHoursNowcast dataArr={mapData2Hr}/>: <TwoHoursNowcast />}
                        </Route>
                        <Route className='leaflet-container' path='/24hrs'>
                            {/* <GetNEAData dataType="24hour" getData={gettwentyfourhourData}/> */}
                            {Object.keys(mapData24Hr).length !== 0?<TwentyfourHoursForecast dataArr={mapData24Hr}/>: <TwentyfourHoursForecast />}
                        </Route>
                        <Route className='leaflet-container' path='/PSI'>
                            {/* <GetNEAData dataType="psi" getData={getPsiData}/> */}
                            {Object.keys(mapDataPsi).length !== 0? <PSI dataArr={mapDataPsi}/>: <PSI />}
                        </Route>
                        <Route exact path='/'>
                            {/* <GetNEAData dataType="2hour" getData={gettwohourData}/> */}
                            {Object.keys(mapData2Hr).length !== 0? <TwoHoursNowcast dataArr={mapData2Hr}/>: <TwoHoursNowcast />}
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