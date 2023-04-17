import React from "react";

import "../mainpics.css"
import ShareBtn from "../upper_body/share-button";
import SaveBtn from '../upper_body/savebtn-upperbody';

const PicsDetail = ({ propImages, setSaveFav, saveFav, signedIn,
                    setSignedIn, siteUsers, propertyName }) => {
    
    return (
        
        <div className="detail-container" style={{padding: "20px"}}>
            <div className="updateBtn">
                <ShareBtn 
                    siteUsers={siteUsers}
                    propImages={propImages}
                    propertyName={propertyName}
                />
                <SaveBtn
                    setSaveFav={setSaveFav}
                    saveFav={saveFav}
                    signedIn={signedIn}
                    setSignedIn={setSignedIn}
                />
            </div>
            <div className="large-image" >
                    {/* Large */}
                    {
                        propImages && propImages[0] &&
                        <img src={propImages[0].image} alt="" width="1120" height="560" style={{cursor:'pointer', margin: "20px"}}/>
                    }
            </div>
            <div className="column">
                <div className="row" style={{display: "flex"}}>
                    {/* Column Image 1 */}
                    {
                        propImages && propImages[2] &&
                        <img src={propImages[2].image} alt="" width="272" height="280" style={{cursor:'pointer', margin: "20px"}}/>
                    }
                    {/* Column Image 2 */}
                    {
                        propImages && propImages[3] &&
                        <img src={propImages[3].image} alt="" width="272" height="280" style={{cursor:'pointer', margin: "20px"}}/>
                    }
                </div>
            </div>
            <div className="column">
                <div className="row" style={{display: "flex"}}>
                    {/* Column Image 3 */}
                    {
                        propImages && propImages[1] &&
                        <img src={propImages[1].image} alt="" width="272" height="280" style={{cursor:'pointer', margin: "20px"}}/>
                    }
                    {
                        propImages && propImages[4] &&
                        <img src={propImages[4].image} alt="" width="272" height="280" style={{cursor:'pointer', margin: "20px"}}/>
                    }
                </div>
            </div>
            <div className="column">
                <div className="row" style={{display: "flex"}}>
                    {/* Column Image 4 */}
                    {
                        propImages && propImages[5] &&
                        <img src={propImages[5].image} alt="" width="272" height="280" style={{cursor:'pointer', margin: "20px"}}/>
                    }
                </div>
            </div>
        </div>
    )
   
}

export default PicsDetail;