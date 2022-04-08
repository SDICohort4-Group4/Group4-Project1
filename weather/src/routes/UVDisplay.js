
export default function UVDisplay(props){
    return(
        <>
            <div>
                <div>
                    <h3 className="container_headerbox">UV INDEX</h3>
                </div>
                <div className="uv-flexbox">
                    <div className="UVinfographic_container">                                
                        {props.uvData.index===undefined ? null: UVReading(props.uvData.index[0].value)}  
                                                        
                    </div>
                    <div >
                        <table className="UVlegend_container">
                            <thead >
                                <tr>
                                    <th className="UVlegend_head" colSpan="2">Legend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="UVlegend1" >
                                    <td>0 - 2</td>
                                    <td>Low</td>
                                </tr>
                                <tr className="UVlegend2" >
                                    <td>3 - 5</td>
                                    <td>Moderate</td>
                                </tr>
                                <tr className="UVlegend3" >
                                    <td>6 - 7</td>
                                    <td>High</td>
                                </tr>
                                <tr className="UVlegend4" >
                                    <td>8 - 10</td>
                                    <td>Very High</td>
                                </tr>
                                <tr className="UVlegend5" >
                                    <td>Above 11</td>
                                    <td>Extreme</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


function UVReading(uvData){
        
    if(uvData>=0 && uvData<3) 
         return <div className="UVlegend1">{uvData}</div>
    if(uvData>=3 && uvData<6)
        return <div className="UVlegend2">{uvData}</div>
    if(uvData>=6 && uvData<8)
        return <div className="UVlegend3">{uvData}</div>
    if(uvData>=8 && uvData<11)
        return <div className="UVlegend4">{uvData}</div>
    if(uvData>10)
        return <div className="UVlegend5">{uvData}</div>
    
    return uvData;    
}