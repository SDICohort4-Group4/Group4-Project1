
export default function FourDaysForecast(props){
    let newArray=props.fourdayData.forecasts
    return(
        <>  
            <div>
                <h2 className="container_headerbox">Forecasts for Next 4 days</h2>
            </div>
                {props.fourdayData.forecasts===undefined ? null 
                : 
                <table>
                  <tbody>
                    {newArray.map((forecasts,index)=>(
                        <tr key={index}>
                          <td>{weatherIcon(forecasts.forecast)}</td>
                          <td>{forecasts.forecast}</td>
                        </tr>
                    ))}    
                  </tbody>
                </table>
                }
        </>
    )
}

function weatherIcon(forecast){
    
    if (forecast.includes("thundery showers")) {
        return <img className="fourDayIcon" src={require("../assets/icons/thundery-showers.png")} alt="rainy"/>
    }
    if (forecast.includes("partly cloudy")) {
        return <img className="fourDayIcon" src={require("../assets/icons/partly-cloudy.png")} alt="cloudy"/>
    }
    if (forecast.includes("cloudy")) {
        return <img className="fourDayIcon" src={require("../assets/icons/cloudy.png")} alt="cloudy"/>
    }
    if (forecast.includes("sunny")) {
        return <img className="fourDayIcon" src={require("../assets/icons/sunny.png")} alt="sunny"/>
    }
    if (forecast.includes("light rain")) {
        return <img className="fourDayIcon" src={require("../assets/icons/light-rain.png")} alt="rainy"/>
    }
    
   return <img className="fourDayIcon" src={require("../assets/icons/happy.png")} alt="happy"/>

}