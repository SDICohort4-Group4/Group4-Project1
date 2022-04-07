
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
                                <tr style={{color: "#579C00", fontWeight: "bold"}}>
                                    <td>0 - 2</td>
                                    <td>Low</td>
                                </tr>
                                <tr style={{color: "#F8CE09", fontWeight: "bold"}}>
                                    <td>3 - 5</td>
                                    <td>Moderate</td>
                                </tr>
                                <tr style={{color: "#FF8400", fontWeight: "bold"}}>
                                    <td>6 - 7</td>
                                    <td>High</td>
                                </tr>
                                <tr style={{color: "#D80000", fontWeight: "bold"}}>
                                    <td>8 - 10</td>
                                    <td>Very High</td>
                                </tr>
                                <tr style={{color: "#7031A1", fontWeight: "bold"}}>
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
         return <div style={{color:"#579C00"}}>{uvData}</div>
    if(uvData>=3 && uvData<6)
        return <div style={{color:"#F8CE09"}}>{uvData}</div>
    if(uvData>=6 && uvData<8)
        return <div style={{color:"#FF8400"}}>{uvData}</div>
    if(uvData>=8 && uvData<11)
        return <div style={{color:"#D80000"}}>{uvData}</div>
    if(uvData>10)
        return <div style={{color:"#7031A1"}}>{uvData}</div>
    
    return uvData;    
}