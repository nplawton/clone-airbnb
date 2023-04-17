import React from "react";

import "../amenity.css";

const AirInformation = ({ airImg }) => {
    
    
    return (
        <div id="air_container" >
            <img 
                id="adminImg"
                src={airImg}
                alt=""
            />
            <h1 id="air_title">
                AirCover is comprehensive protection included for free with every booking.
            </h1>
            <div id="air_top">
                <div id="air_column1">
                    <div>
                        <h1 id="air_topic">
                            Booking Protection Guarantee
                        </h1>
                        <p id="air_detail">
                            In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we'll find you a similar or better home, or we'll refund you.
                        </p>
                    </div>
                    <div>
                        <h1 id="air_topic">
                            Get-What-You-Booked Guarantee
                        </h1>
                        <p id="air_detail">
                            If at any time during your stay you find your listing isn't as advertised—for example, the refrigerator stops working and your Host can't easily fix it, or it has fewer bedrooms than listed—you'll have three days to report it and we'll find you a similar or better home, or we'll refund you.
                        </p>
                    </div>
                </div>
                <div id="air_column2">
                    <div>
                        <h1 id="air_topic">
                            Check-In Guarantee
                        </h1>
                        <p id="air_detail">
                            If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
                        </p>
                    </div>
                    <div>
                        <h1 id="air_topic">
                            24-hour Safety Line
                        </h1>
                        <p id="air_detail">
                            If you ever feel unsafe, you'll get priority access to specially-trained safety agents, day or night.
                        </p>
                    </div>
                </div>
            </div>
            <div id="air_footer">
                <h3 id="air_footnote">
                    Find complete details on how AirCover protects your booking in our
                </h3>
                <button id="air_footBtn">
                    Help Center
                </button>
            </div>
        </div>
    )

}

export default AirInformation;