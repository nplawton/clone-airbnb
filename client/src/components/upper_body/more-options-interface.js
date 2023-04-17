import React from "react";

import '../share.css';

const OptionsInterface = () => {
    
    const globe = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/2048px-Globe_icon.svg.png';
    const login = 'https://cdn.onlinewebfonts.com/svg/img_337531.png';
    const wrong = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Exclamation_flat_icon.svg/451px-Exclamation_flat_icon.svg.png';
    const myasus = 'https://camo.githubusercontent.com/fa4b7340e99edf53a4de468ade4abc3214807f846683567c6c7d45372f8b6a5a/68747470733a2f2f73746f72652d696d616765732e732d6d6963726f736f66742e636f6d2f696d6167652f617070732e35333631372e31343036343131343439333033373734322e30326565343466622d376430382d343164622d623830302d3464646635373761316636372e33396464343863372d663661322d343336612d623362622d363636353333653065313634';
    const onenote = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_OneNote_%282019%E2%80%93present%29.svg.png';
    const phoneLink = 'https://uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/computer-icon.png';
    const copyLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVQvU1nDIh8DuPYFgOIDM-ddvhYr-Iox5c0VFkIEL1Q&usqp=CAU&ec=48600113';
    
    return(
        <div id="option_interface" >
            <div id="option_top">
                <img 
                    src={globe}
                    id="option_globe"
                    alt=""
                />
                <h1 id="toprow_text">Share link</h1>
                <img 
                    src={login}
                    id="option_login"
                    alt=""
                />
            </div>
            <div id="option_accout">
                <h1 id="account_title">
                    <img 
                        src={wrong}
                        id="account_sym" 
                        alt=""
                    />
                    Verify your account
                </h1>
                <p id="account_info">
                    To see your suggested contacts sign on with your Micorsoft work work or school account.
                </p>
                <button id="accountBtn">Verify</button>
            </div>
            <div>
                <div id="device-top">
                    <h1 id="device_text">Nearby sharing</h1>
                    <select>
                        <option id="device_option">Sharing off</option>
                        <option id="device_option">My devices</option>
                        <option id="device_option">Everyone</option>
                    </select>
                </div>
                <h1 id="device_text"> Nearby sharing is turned off </h1>
                <h3 id="device_subtitle"> 
                    Change your sharing setting to see available devices
                </h3>
            </div>
            <center><div style={{ backgroundColor: 'black', width: 'auto', height: '1px' }}></div></center>
            <div id="lower_option">
                <h1 id="device_text"> Share with </h1>
                <button>All apps &gt; </button>
            </div>
            <div id="share_platform">
                <h3 id='platform_text'>
                    <img 
                        src={myasus}
                        id='platfromImg'
                        about=""
                    />
                    MyASUS
                </h3>
                <h3 id='platform_text'>
                    <img 
                        src={onenote}
                        id='platfromImg'
                        about=""
                    />
                    OneNote for 
                    <h3 id='platform_text1'>Windows 10</h3>
                </h3>
                <h3 id='platform_text'>
                    <img 
                        src={phoneLink}
                        id='platfromImg1'
                        about=""
                    />
                    Phone Link
                </h3>
                <h3 id='platform_text'>
                    <img 
                        src={copyLink}
                        id='platfromImg'
                        about=""
                    />
                    Copy Link
                </h3>
            </div>
        </div>
    )

}

export default OptionsInterface;