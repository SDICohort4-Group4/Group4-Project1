import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

const textIcon= (psiValue, iconSize) => {

    return new L.DivIcon({
        iconSize: (iconSize),
        iconAnchor: [7, iconSize],
        popupAnchor: [5, -(iconSize/2)],
        html: `<div class="tIconCont">${psiValue}</div>`,
        className: "text-icon-style"
    });
}



function CreatePSIMarkers(props) {
    function markers() {
        // return array of markers
        if (props.obj) {
            return(
                props.obj.map((ele, i) => {
                    return(
                    <Marker key={i} position={ele.coordinate} icon={textIcon(ele.forecast, props.iconSize)}/>

                    )
                })
            )
        }

    }

    return (
        <>
            {markers()}
        </>

    )
}


export default CreatePSIMarkers;
