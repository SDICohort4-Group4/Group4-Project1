import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    NavLink,
} from 'react-router-dom';
import '../assets/styles/styles.css'
import {TwoHoursNowcast, TwentyfourHoursForecast, FourDaysForecast, PSI, UV} from '../routes/routes';
import GetNEAData from '../components/GetNEAData';
import { useState } from 'react';


function Home() {
    let [data, setData] = useState("");

    function getData(obj) {
        console.log(obj)
        setData(obj);
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
                            <GetNEAData dataType={"2HOUR"} getData={getData}/>
                            {data? <TwoHoursNowcast dataArr={data}/>: null}
                        </Route>
                        <Route className='leaflet-container' path='/24hrs'>
                            <TwentyfourHoursForecast />
                        </Route>
                        <Route className='leaflet-container' path='/PSI'>
                            <PSI />
                        </Route>
                        <Route exact path='/'>
                            <h2> This is the empty page</h2>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <div className="information">
                <div className="container">
                    <div >
                        <FourDaysForecast />
                    </div>
                </div>
                <div className="container">
                    <div className="UVcontainer">
                        <UV />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;