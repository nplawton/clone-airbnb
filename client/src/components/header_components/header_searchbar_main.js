import React, { useState } from "react";



import "./searchbar.css";
import SearchModal from "./search-modal";
import SearchHeader from "./searchbar-header-stepdown";
import StaySearchMenu from "./stay-search-menu";
import StayMenuModal from "./stay-menu-modal";


const HeaderSearchBar = ({ lanData, setLanData, setCurrentLan, setCurrentCurrency,
                        currData, setCurrData, setMainHeader }) => {
    
    const [searchHeader, setSearchHeader] = useState(false);

    const handleClick = (e) => {
        setSearchHeader(true);
    }
    
    return(
        <div className="search_wrapper" >
            <button 
                style={{
                    fontWeight:'bold'
                }}
                id='search_input'
                onClick={handleClick}
            >
                    Start your search
                 <img 
                    id='search_icon'
                    src='https://images.freeimages.com/fic/images/icons/1262/amora/256/find.png'
                    alt=""
                />
            </button>
            <SearchModal
                searchHeader={searchHeader}
                onClose={() => setSearchHeader(false)}
            >
                <SearchHeader
                    lanData={lanData}
                    setLanData={setLanData}
                    currData={currData}
                    setCurrData={setCurrData}
                    setCurrentLan={setCurrentLan}
                    setCurrentCurrency={setCurrentCurrency}
                    setSearchHeader={setSearchHeader}
                />
            </SearchModal>
        </div>
    )
    

}

export default HeaderSearchBar;