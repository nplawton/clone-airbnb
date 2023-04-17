import React from "react";

import "../extendedSearch.css";

const WhereMapScreen = ({ setWhereSubtext, setWhereOpen, 
                        setCalendarOpen, setCheckinOpen }) => {

    const flexible = 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg';
    const europe = 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320';
    const canada = 'https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320';
    const seAsia = 'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320';
    const mexico = 'https://a0.muscache.com/im/pictures/a940f971-4ac1-413b-90dd-bd55965b215e.jpg?im_w=320';
    const sAmerica = 'https://a0.muscache.com/im/pictures/06a30699-aead-492e-ad08-33ec0b383399.jpg?im_w=320';

    const handleFlex = (e) => {
        setWhereSubtext(`Search destinations`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black';
    }

    const handleEurope = (e) => {
        setWhereSubtext(`Europe`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black';
    }

    const handleCanada = (e) => {
        setWhereSubtext(`Canada`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black'
    }

    const handleAsia = (e) => {
        setWhereSubtext(`Southeast Asia`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black'
    }

    const handleMexico = (e) => {
        setWhereSubtext(`Mexico`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black'
    }

    const handleSouth = (e) => {
        setWhereSubtext(`South America`);
        setWhereOpen(false);
        setCalendarOpen(true);
        setCheckinOpen(true);

        e.target.style.border = '3px solid black'
    }

    return (
        <div className="map_screen_holder">
            <h1 className="map_screen_title" >Search by region</h1>
            <div className="map_screen_container" >
                <div id='flexArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleFlex}
                    >
                        <img 
                            src={flexible}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">I'm flexible</h1>
                </div>
                <div id='europeArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleEurope}
                    >
                        <img 
                            src={europe}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">Europe</h1>
                </div>
                <div id='canadaArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleCanada}
                    >
                        <img 
                            src={canada}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">Canada</h1>
                </div>
                <div id='seAsiaArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleAsia}
                    >
                        <img 
                            src={seAsia}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">Southeast Asia</h1>
                </div>
                <div id='mexicoArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleMexico}
                    >
                        <img 
                            src={mexico}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">Mexico</h1>
                </div>
                <div id='sAmericaArea'>
                    <button
                        className="map_screen_btn"
                        onClick={handleSouth}
                    >
                        <img 
                            src={sAmerica}
                            id="map_screen_img"
                            alt=''
                        />
                    </button>
                    <h1 className="map_screen_subtext">South America</h1>
                </div>
            </div>
        </div>
    )
}

export default WhereMapScreen;