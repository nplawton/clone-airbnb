import React from "react";

import "../amenity.css";

const PropLocationInfo = ({ propInfo, locationInfo }) => {
    
    
    return(
        <div id="prop_loc_info" >
            <h1 id="loc_title">
                About this space
            </h1>
            <p id="prop_descrip">
                {locationInfo}
            </p>
            <h3 id="space_info">
                The Space
            </h3>
            <p id="prop_descrip">
                {propInfo}
            </p>
        </div>
    )

}

export default PropLocationInfo;