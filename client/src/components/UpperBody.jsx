import React, { useState, useEffect } from "react";
import './styles.css'

import SaveBtn from './upper_body/savebtn-upperbody';
import Houseinfo from "./upper_body/Houseinfo.jsx";
import Mainpics from "./upper_body/Mainpics.jsx";
import ShareBtn from "./upper_body/share-button";


const UpperBody = ({ saveFav, setSaveFav, signedIn, setSignedIn, 
                rating, numReviews, siteUsers, propertyName,
                propCity, propCountry, propState, positions, superHost, superHosticon }) => {
    
    const [propImages, setPropImages] = useState([{}])


    useEffect(() =>{
        getPropImgs();
    }, [])
    
    const getPropImgs = async () =>{
        try {
            const res = await fetch ('http://localhost:5172/propertyImages');
            const text = await res.text();
            //console.log(text);
            const data = JSON.parse(text);
            setPropImages(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div id="upper_body" className="upper_body">
            <div className='homeinfocontainer' style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Houseinfo 
                    rating={rating}
                    numReviews={numReviews}
                    propertyName={propertyName}
                    propCity={propCity}
                    propCountry={propCountry}
                    propState={propState}
                    positions={positions}
                    superHost={superHost}
                    superHosticon={superHosticon}
                />
                {/* <Sharensave /> */}
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
            <div id={'mainhousepics'}>
                <Mainpics 
                    propImages={propImages}
                    setSaveFav={setSaveFav}
                    saveFav={saveFav}
                    signedIn={signedIn}
                    setSignedIn={setSignedIn}
                    siteUsers={siteUsers}
                    propertyName={propertyName}
                />
            </div>
        </div>
    )

}

export default UpperBody;