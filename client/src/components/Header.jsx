import React, { useState, useEffect } from "react";


import Logo from "./header_components/Logo.jsx";
import HeaderSearchBar from './header_components/header_searchbar_main.js';
import Becomehost from "./header_components/Becomehost.jsx";
import GlobeBtn from './header_components/globebtn_header_main';
import LogInButton from './header_components/login-main';


const Header = ({ signedIn, setSignedIn, lanData, setLanData, currData, 
                setCurrData, setCurrentLan, setCurrentCurrency, 
                siteUsers, setMainHeader }) => {
    
        // .mainheader {  
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     height: 80px;
        //     background-color: #fff;
        //     max-width: 1080px
            
        //   }

    return (
        <center>
            <div id="mainheader"
                className="mainheader">
                <Logo />
                <div id="maincenter">
                    <HeaderSearchBar 
                        lanData={lanData}
                        setLanData={setLanData}
                        currData={currData}
                        setCurrData={setCurrData}
                        setCurrentLan={setCurrentLan}
                        setCurrentCurrency={setCurrentCurrency}
                    />
                </div>
                <div id="mainrightside">
                    <Becomehost />
                    <GlobeBtn
                        lanData={lanData}
                        setLanData={setLanData}
                        currData={currData}
                        setCurrData={setCurrData}
                        setCurrentLan={setCurrentLan}
                        setCurrentCurrency={setCurrentCurrency}
                    />
                    <LogInButton
                        signedIn={signedIn}
                        setSignedIn={setSignedIn}
                        siteUsers={siteUsers}
                    />
                </div>
            </div>
        </center>
    )

}

export default Header;