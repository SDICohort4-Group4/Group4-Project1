import axios from 'axios';
import {useEffect} from "react";

const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});

function GetNEAData(props) {
  useEffect(()=>{
    let dataType="";
   
    switch(props.dataType.toUpperCase()){
      case "PSI": dataType="/psi";
        break;
      case "UVINDEX": dataType="/uv-index";
        break;
      case "2HOUR": dataType="/2-hour-weather-forecast";
        break;
      case "24HOUR": dataType="/24-hour-weather-forecast";
        break;
      case "4DAY": dataType="/4-day-weather-forecast";
        break;
      default: dataType="/2-hour-weather-forecast";
    }
    
    findNEAData(dataType);

    return;
  },[])


  async function findNEAData(dataType) {
    const response = await API.get(dataType)
  
    if (response.status===200){

      // create an array of object {name: , coordinate} from area_metadata
      let coorArr = response.data.area_metadata.map(ele => {
        let formatObj = {
          name: ele.name, 
          coordinate: [ele.label_location.latitude, ele.label_location.longitude]
        }
        return formatObj;
        })
      
      // pharse through forcastArr to add forcast into coor Arr
      let returnArr = response.data.items[0].forecasts.map(ele=> {
        let tempArr = coorArr.filter(coorEle => coorEle.name === ele.area);
        let formatObj = {...tempArr[0], forecast: ele.forecast}
        return formatObj
      })
      //return data in {name: , coordinate: , forecast: }
      props.getData(returnArr);
    }
  }
}

export default GetNEAData;

//Reference

  //Pass in dataType="xxx" 
  //Sample code:  
  
  //function getData(data) {
  //  setData(data);
  //}
  //<GetNEAData dataType="2hour" getData={getData}/> 

  // PSI dataType="psi"
      // data.readings
      // data.readings.psi_twenty_four_hourly.national
      // data.readings.pm25_twenty_four_hourly.national

  // UV index dataType="uvindex"
      // data.value

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