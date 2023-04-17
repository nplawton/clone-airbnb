import React from "react";

import '../extendedSearch.css'
import GlobeBtn from './globebtn_header_main';
import LogInButton from './login-main';
import SearchBar from "./new-search-bar";

const SearchHeader = ({ signedIn, setSignedIn, lanData, setLanData, currData, 
                        setCurrData, setCurrentLan, setCurrentCurrency, 
                        siteUsers, setSearchHeader }) => {

    const logo = 'https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png'; 

    return(

        <div 
            id="search_mainheader"
            className="search_mainheader"
        >
            <button id="search_logo">
                <img id="search_logo_img" src={logo} /> Fantasybnb
            </button>
            <SearchBar
                setSearchHeader={setSearchHeader} 
            />
            <div id="mainrightside">
                <div>
                    <a href='https://www.airbnb.com/host/homes'>
                    <button style={{cursor: 'pointer', 
                                    width: "142px", 
                                    height: "42px", 
                                    padding: "0", 
                                    background: 'none', 
                                    border: 'none', 
                                    whiteSpace:'nowrap',
                                    marginRight: "30px",
                                    fontWeight: "bold",
                                    fontSize:  "14px"
                                    }}
                    >

                        Fantasybnb your home

                    </button>
                    </a>
                </div>
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
    )

}

export default SearchHeader;