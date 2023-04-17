import React, { useState, useEffect } from "react";

import AmenitiesHome from './lower_body_left/amenities-main.js';
import CalendarMain from "./lower_body_left/calendar-main.js";

import "./amenity.css";
import AirModal from "./lower_body_left/air_modal.js";
import AirInformation from "./lower_body_left/air_information.js";
import PropInfoModal from "./lower_body_left/prop-info-modal.js";
import PropLocationInfo from "./lower_body_left/prop-location-info.js";

const LowerBodyLeft = ({ propertyName, guest, propBeds, locationInfo,
                    superHost, siteUsers, propInfo }) => {
    
    const [amentiesData, setAmentiesData] = useState([{}]);
    const [airOpen, setAirOpen] = useState(false);
    const [propInfoOpen, setPropInfoOpen] = useState(false);

    useEffect(() => {
        getAmenties();
    }, []);

    const getAmenties = async () =>{
        try {
         const res = await fetch ('http://localhost:5172/amenities');
         const text = await res.text();
         //console.log(text);
         const data = JSON.parse(text);
         setAmentiesData(data);
        } catch (err) {
         console.error(err);
        }
    }

    const superIcon = 'https://images.vexels.com/media/users/3/139475/isolated/preview/6a24acbf1b46fb205a785207449786e0-trophy-medal-championship-winner-icon.png';
    const locationIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Line-style-icons-map-pin-black.svg/360px-Line-style-icons-map-pin-black.svg.png';
    const airImg = 'https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg';

    //console.log(siteUsers)
    
    return (
        <div className="lowerbody_left_container">
            <div id="left-top-section">
                <div id="left_top">
                    <h1>
                        {propertyName} hosted by 
                        {
                            siteUsers && siteUsers[4] &&
                            siteUsers[4].firstname
                        }
                    </h1>
                    <h3>
                        {guest} guests · 1 bedroom · {propBeds} bed · Master Bathroom
                        
                    </h3>
                    {/* Place Host image here */}
                    <pre><br></br></pre>
                        <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px'}}></div>
                </div>
                <div id="left_middle">
                        <div id="middle_info">
                            {
                                amentiesData && amentiesData[10] &&
                                <img 
                                    id="adminImg"
                                    src={amentiesData[10].sym_descrip}
                                    alt=""
                                />
                            }
                            <div>
                                <h3 id='checkin_detail' style={{fontSize: 18}}>
                                <b>Self check-in</b>
                                </h3>
                                <h3 id='checkin_text' style={{fontSize: 16}}>
                                    Check yourself in with the lockbox.
                                </h3>
                            </div>
                        </div>
                        <div id="middle_info">
                            {
                                superHost
                                    ?    <img 
                                            id="adminImg"
                                            src={superIcon}
                                            alt=""
                                        />
                                    :   null
                            }
                            <div>
                                <h3 id='checkin_detail' style={{fontSize: 18}}>
                                    {
                                        siteUsers && siteUsers[4] &&
                                        siteUsers[4].firstname
                                    }
                                      <b>is a Superhost</b>
                                </h3>
                                <h3 id='checkin_text' style={{fontSize: 16}}> 
                                    Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                                </h3>
                            </div>
                        </div>
                        <div id="middle_info">
                                <img 
                                    id="adminImg"
                                    src={locationIcon}
                                    alt=""
                                />
                            <div>
                                <h3 id='checkin_detail' style={{fontSize: 18}}>
                                    <b>Great location</b>
                                </h3>
                                <h3 id='checkin_text' style={{fontSize: 16}}>
                                    90% of recent guests gave the location a 5-star rating.
                                </h3>
                            </div>
                        </div>

                </div>
                <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px'}}></div>
                <pre><br></br></pre>
                <div id='air_cover'>
                    <img 
                        id="adminImg2"
                        src={airImg}
                        alt=""
                    />
                    <p id="air_text" style={{fontSize: 18}}>
                        Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
                    </p>
                    <div className="airWrapper" id="air_info">
                        <button
                            id='airBtn'
                            onClick={() => setAirOpen(true)}
                        >
                            Learn More
                        </button>
                        <pre><br></br></pre>
                        <div style={{ backgroundColor: '#dadada', width: '653px', height: '1px'}}></div>
                        <AirModal
                            airOpen={airOpen}
                            onClose={() => setAirOpen(false)}
                        >
                            <AirInformation 
                                airImg={airImg}
                            />
                        </AirModal>
                    </div>
                </div>
            </div>
            <div id="middle_section">
                <p id="site_info">
                    {propInfo}
                </p>
                <button
                    id="infoBtn"
                    onClick={() => setPropInfoOpen(true)}
                >
                    Show more &#10095;
                </button>
                <PropInfoModal
                    propInfoOpen={propInfoOpen}
                    onClose={() => setPropInfoOpen(false)}
                >
                    <PropLocationInfo 
                        propInfo={propInfo}
                        locationInfo={locationInfo}
                    />
                </PropInfoModal>
            </div>
            <AmenitiesHome 
                amentiesData={amentiesData}
            />
            <CalendarMain />
        </div>
    )

}

export default LowerBodyLeft;