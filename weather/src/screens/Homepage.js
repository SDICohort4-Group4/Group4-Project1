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

class Home extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
                <Router >
                    <div className='navBar'>
                        <div>
                            <Link to='/'></Link>
                            <NavLink className='link' to ='/2hrs'>2 Hours Nowcast</NavLink>
                            <NavLink className='link'to ='/24hrs'>24 Hours Forecast</NavLink>
                            <NavLink className='link'to ='/4days'>4 Days Forecast</NavLink>
                            <NavLink className='link'to ='/PSI'>PSI</NavLink>
                            <NavLink className='link'to ='/UV'>UV</NavLink>
                        </div>
                    </div>
                    <div className="mapArea">
                        <Switch>
                            <Route exact path='/'>
                                <h2> This is the empty page</h2>
                            </Route>
                            <Route className='leaflet-container' path='/2hrs'>
                                <TwoHoursNowcast />
                            </Route>
                            <Route path='/24hrs'>
                                <TwentyfourHoursForecast />
                            </Route>
                            <Route path='/4days'>
                                <FourDaysForecast />
                            </Route>
                            <Route path='/PSI'>
                                <PSI />
                            </Route>
                            <Route path='/UV'>
                                <UV />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

export default Home;