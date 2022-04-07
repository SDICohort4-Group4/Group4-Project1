import axios from 'axios';
import {useEffect, useState} from "react";

const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});

const locationCoor = (location) => {
  let coordinate;
  switch(location) {
      case "north": 
          coordinate = [1.41803, 103.82];
          break;
      case "south": 
          coordinate = [1.29587, 103.82];
          break;
      case "east":
          coordinate = [1.35735, 103.94];
          break;
      case "west":
          coordinate = [1.35735, 103.7];
          break;
      case "central":
          coordinate = [1.35735, 103.82];
          break;           
      case "national":
          coordinate = [0,0];
          break;
      default:
          alert(`${coordinate} is not defined`)
          return
  }
  return coordinate;
}


function Get4DUV(props) {
    let [updateCount, setUpdateCount] = useState(0)

    useEffect(()=> {

        find4D("/4-day-weather-forecast");
        findUV("/uv-index");
        // change the updateCount every 10s to update uv and 4day data
        let interval = setTimeout(()=>{
            setUpdateCount(updateCount => updateCount + 1);
            // console.log(updateCount) for debugging
        }, 10000);

        return ()=> clearTimeout(interval)
    },[updateCount])


    async function find4D(dataType) {
        let nowTime = new Date().toISOString().slice(0, -5);
        const response = await API.get(dataType,{
        params: {
            date: [nowTime],
        }
        })
    
        if (response.status===200){
        props.get4D({...response.data.items[0]});
        
        }
    }
    
    async function findUV(dataType) {
        let nowTime = new Date().toISOString().slice(0, -5);
        const response = await API.get(dataType,{
        params: {
            date: [nowTime],
        }
        })
    
        if (response.status===200){
        props.getUV({...response.data.items[0]});
        
        }
    }

    return(<></>)

}

export default Get4DUV;

//Reference

  // Pass in dataType="xxx" 
  // Sample code:  
  // function getData(data) {
  //  setData(data); }

  // in parent component use:
  // <GetNEAData dataType="2hour" getData={getData}/> 

  // PSI dataType="psi"
      // data.readings
      // data.readings.psi_twenty_four_hourly.national
      // data.readings.pm25_twenty_four_hourly.national

  // UV index dataType="uvindex"
      // data.index[x].value 
      // there is a value for every hour
      // for latest value use x=0

  // 2 hour weather dataType="2hour"
      // data.forecasts[x]
      // data.forecasts[x].area
      // data.forecasts[x].forecast

  // 24 hours weather dataType="24hour"
      // data.general.forecast
      // data.general.relative_humidity
      // data.general.temperature

  // 4 day weather dataType="4day"
      // data.forecasts[x].forecast)
      // data.forecasts[x].temperature)
      // data.forecasts[x].relative_humidity)
      // data.forecasts[x].wind)
      // where x is a integer between 0 to 3