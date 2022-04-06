
export default function UVDisplay(props){
    return(
        <>
            <div>
                <div>
                    <h2 className="container_headerbox">UV INDEX</h2>
                </div>
                <div className="UVinfographic_container">
                    <div>
                        <br/>
                        {props.uvData.index===undefined ? null: (props.uvData.index[0].value)}
                        
                    </div>
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
        </>
    )
}