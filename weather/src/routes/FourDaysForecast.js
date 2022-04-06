
export default function FourDaysForecast(props){
    return(
        <>  
            <div>
                <h2 className="container_headerbox" style={{textAlign:"center"}}>Forecasts for Next 4 days</h2>
            </div>
                {props.fourdayData.forecasts===undefined ? null 
                : 
                <table>
                  <tbody>
                    <tr>
                        <td>Weather Icon</td>
                        <td>{props.fourdayData.forecasts[0].forecast}</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>{props.fourdayData.forecasts[1].forecast}</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>{props.fourdayData.forecasts[2].forecast}</td>
                    </tr>
                    <tr>
                        <td>Weather Icon</td>
                        <td>{props.fourdayData.forecasts[3].forecast}</td>
                    </tr>
                  </tbody>
                </table>
                }
    
        </>
    )
}