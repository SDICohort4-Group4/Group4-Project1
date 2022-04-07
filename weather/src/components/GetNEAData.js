import axios from 'axios';
import {useEffect} from "react";

const API = axios.create({
  baseURL: "https://api.data.gov.sg/v1/environment",
});

const locationCoor = (location) => {
  let coordinate;
  switch(location) {
      case "north": 
          coordinate = [1.432, 103.786528];
          break;
      case "south": 
          coordinate = [1.277, 103.819];
          break;
      case "east":
          coordinate = [1.345, 103.944];
          break;
      case "west":
          coordinate = [1.34039, 103.705];
          break;
      case "central":
          coordinate = [1.350772, 103.839];
          break;           
      default:
          alert(`${coordinate} is not defined`)
          return
  }
  return coordinate;
}


function GetNEAData(props) {
  useEffect(()=>{
    let dataType="";
   
    switch(props.dataType.toUpperCase()){
      case "PSI": dataType="/psi";
        break;
      case "UVINDEX": findNEAData("/uv-index");
        break;
      case "2HOUR": find2Hr("/2-hour-weather-forecast");
        break;
      case "24HOUR": find24Hr("/24-hour-weather-forecast");
        break;
      case "4DAY": findNEAData("/4-day-weather-forecast");
        break;
      default: find2Hr("/2-hour-weather-forecast");
    }

    return;
  },[])


  async function findNEAData(dataType) {
    let nowTime = new Date().toISOString().slice(0, -5);
    const response = await API.get(dataType,{
      params: {
        date: [nowTime],
      }
    })
  
    if (response.status===200){
     props.getData({...response.data.items[0]});
    
    }
  }


  //function to return 24hr data
  async function find24Hr(dataType) {
    const response = await API.get(dataType);
  
    if (response.status===200){
      console.log(response.data.items[0].periods[0]);
      // create an array of object {name: , coordinate} from area_metadata
      let obj = response.data.items[0].periods[0].regions
      let forecastArr = Object.keys(obj).map(ele => {

        let formatObj = {
          name: ele, 
          coordinate: locationCoor(ele),
          forecast: obj[ele]

        }
        return formatObj;
        })

      //return data in {name: string, coordinate: [Array of lat and long], forecast: string }
      props.getData(forecastArr);
    }
  }

  // function to return 2hr data
  async function find2Hr(dataType) {
    const response = await API.get(dataType);

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
        return formatObj;
      })
      //return data in {name: string, coordinate: [Array of lat and long], forecast: string }
      props.getData(returnArr);
    }
  }

}



export default GetNEAData;

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