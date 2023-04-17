import React, { useState, useEffect } from "react";

import LowerBodyLeft from "./LowerBodyLeft";
import LowerBodyRight from "./lower-body-right/lowerbody-right-main";

import "./lowerBody.css"

const LowerBody = ({ rating, numReviews, propertyName, locationInfo, nightPrice,
                    guest, propBeds, superHost, siteUsers, propInfo }) => {
    
    
    return (
        <div className="lowerbody_container">
            <LowerBodyLeft 
                propertyName={propertyName}
                guest={guest}
                propBeds={propBeds}
                superHost={superHost}
                siteUsers={siteUsers}
                propInfo={propInfo}
                locationInfo={locationInfo}
            />
            <LowerBodyRight 
                numReviews={numReviews}
                rating={rating}
                nightPrice={nightPrice}
            />
        </div>
    )

}

export default LowerBody;