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

    const [psiData, setPsiData]=useState({});
    const [uvData, setUVData]=useState({});
    const [twohourData, settwohourData]=useState({});
    const [twentyfourhourData, settwentyfourhourData]=useState({});
    const [fourdayData, setfourdayData]=useState({});
 
    function getPsiData(data) {
        setPsiData(data);
    }

    function getUVData(data) {
        setUVData(data);
    }

    function gettwohourData(data) {
        console.log(2,data)
        settwohourData(data);
    }

    function gettwentyfourhourData(data) {
        console.log(data);
        settwentyfourhourData(data);
    }

    function getfourdayData(data) {
        setfourdayData(data);
    }


    return (
        <>
            <Router basename = '/Group4-Project1'>
                <div className='navBar'>
                    <div>
                        <NavLink className='link' to ='/2hrs'>2 Hrs</NavLink>
                        <NavLink className='link'to ='/24hrs'>24 Hrs</NavLink>
                        {/* <NavLink className='link'to ='/4days'>4 Days</NavLink> */}
                        <NavLink className='link'to ='/PSI'>PSI</NavLink>
                        {/* <NavLink className='link'to ='/UV'>UV</NavLink> */}
                        <Link to='/'></Link>
                    </div>
                </div>
                <div className="mapArea">
                    <Switch>
                        <Route className='leaflet-container' path='/2hrs'>
                            <GetNEAData dataType="2hour" getData={gettwohourData}/>
                            {Object.keys(twohourData).length !== 0? <TwoHoursNowcast dataArr={twohourData}/>: <TwoHoursNowcast />}
                        </Route>
                        <Route className='leaflet-container' path='/24hrs'>
                            <GetNEAData dataType="24hour" getData={gettwentyfourhourData}/>
                            {Object.keys(twentyfourhourData).length !== 0?<TwentyfourHoursForecast dataArr={twentyfourhourData}/>: <TwentyfourHoursForecast />}
                        </Route>
                        <Route className='leaflet-container' path='/PSI'>
                            <GetNEAData dataType="psi" getData={getPsiData}/>
                            <PSI psiData={psiData}/>
                        </Route>
                        <Route exact path='/'>
                            <GetNEAData dataType="2hour" getData={gettwohourData}/>
                            {Object.keys(twohourData).length !== 0? <TwoHoursNowcast dataArr={twohourData}/>: <TwoHoursNowcast />}
                        </Route>
                    </Switch>
                </div>
            </Router>
            <div className="information">
                <div className="container">
                    <div >
                        <GetNEAData dataType="4day" getData={getfourdayData}/>
                        <FourDaysForecast fourdayData={fourdayData}/>
                    </div>
                </div>
                <div className="container">
                    <div className="UVcontainer">
                        <GetNEAData dataType="uvindex" getData={getUVData}/>
                        <UVDisplay uvData={uvData}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;