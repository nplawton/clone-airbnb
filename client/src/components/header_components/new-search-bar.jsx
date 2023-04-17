import React, { useState } from "react";

import "../extendedSearch.css";
import StayMenuModal from "./stay-menu-modal";
import StaySearchMenu from "./stay-search-menu";
import ExpMenuModal from "./exp-menu-modal";
import ExpSearchMenu from "./exp-search-menu"

const SearchBar = ({ setSearchHeader }) => {

    const [stayMenu, setStayMenu] = useState(true);
    const [expMenu, setExpMenu] = useState (false);
    const [onlineMenu, setOnlineMenu] = useState (false);


    const handleStay = () => {
        setStayMenu(true);
        setExpMenu(false);
        setOnlineMenu(false);
    }

    const handleExp = () => {
        setExpMenu(true);
        setStayMenu(false);
        setOnlineMenu(false);
    }

    const handleClick = () => {
        setExpMenu(false);
        setStayMenu(false);
        setOnlineMenu(false);
    }
    
  
    
    return(
        <div>
            <div id='option_container'>
                <div id="stay_container">
                    <button
                        id='search_options1'
                        onClick={handleStay}
                        style={{textDecoration: stayMenu ? 'underline' : 'none'}}
                    >
                        Stay
                    </button>
                    <StayMenuModal
                        stayMenu={stayMenu}
                        onClose={() => setStayMenu(false)}
                    >
                        <StaySearchMenu 
                            setSearchHeader={setSearchHeader}
                        />
                    </StayMenuModal>
                </div>
                <div className="exp_container">
                    <button 
                        className="active_option"
                        id='search_options2'
                        onClick={handleExp}
                        style={{textDecoration: expMenu ? 'underline' : 'none'}}
                    >
                        Experiences
                    </button>
                    <ExpMenuModal
                        expMenu={expMenu}
                        onClose={() => setExpMenu(false)}
                    >
                        <ExpSearchMenu
                            setSearchHeader={setSearchHeader}
                        />
                    </ExpMenuModal>
                </div>
                <button 
                    className="active_option"
                    id='search_options3'
                    onClick={handleClick}
                    style={{textDecoration: onlineMenu ? 'underline' : 'none'}}
                >
                    Online Experiences
                </button>
            
            </div>             
        </div>
    )
    

}

export default SearchBar;

/*
    const searchOption = document.querySelectorAll('.active_option');
    let activeBtn = null;

    // add the 'active' class to the first button
    if (searchOption.length > 0) {
        searchOption[0].classList.add('active');
        activeBtn = searchOption[0];
        activeBtn.style.textDecoration = "underline";
    }

    searchOption.forEach(option => {
        option.addEventListener('click', () => {
            if (activeBtn === option) {
            option.classList.remove('active');
            activeBtn = null;
            option.style.textDecoration = "none";
            } else {
            searchOption.forEach(option => {
                option.classList.remove('active');
                option.style.textDecoration = "none";
            });
            option.classList.add('active');
            activeBtn = option;
            activeBtn.style.textDecoration = "underline";
            }
        });
    });

*/