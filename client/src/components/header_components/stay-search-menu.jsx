import React, { useEffect, useState } from "react";
import "../extendedSearch.css";


import WhereModal from "./where_modal";
import WhereMapScreen from "./where-map-screen";
import CheckInModal from "./chekin-modal";
import GuestModal from "./guest-modal";
import GuestSelection from "./guest-selection-screen";
import StayCalendarContainer from "./stay-calendar-container";
import FlexDatesMenu from "./flexible-dates-menu";



const StaySearchMenu = ({ setSearchHeader }) => {
    
    const [whereSubtext, setWhereSubtext] = useState('SearchDestinations');
    const [checkInSubtext, setCheckInSubtext] = useState('Add Dates');
    const [checkOutSubtext, setCheckOutSubtext] = useState('Add Dates');
    const [guestSubtext, setGuestSubtext] = useState('Add guests');
    const [whereOpen, setWhereOpen] = useState(true);
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [checkinOpen, setCheckinOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);
    const [guestOpen, setGuestOpen] = useState(false);
    const [totalGuests, setTotalGuests] = useState(0);
    const [totalInfants, setTotalInfants] = useState(0);
    const [totalPets, setTotalPets] = useState(0);
    const [fontWeight, setFontWeight] = useState('normal');
    const [datesTab, setDatesTab] = useState(true);
    const [flexOption, setFlexOption] = useState(false);
    const [flexSubtext, setFlexSubtext] = useState('Anytime');
    const [btnSwitch, setBtnSwitch] = useState(true);

    
    const handleWhere = () => {
        setWhereOpen(true);
        setCalendarOpen(false);
        setGuestOpen(false);
        setCheckinOpen(false);
        setCheckOutOpen(false);
        setFlexOption(false);
    }

    const handleWhereClose = () => {
        setWhereOpen(false);
        setWhereSubtext('SearchDestinations');
    }

    const handleCheckIn = () => {
        setCheckinOpen(true);
        setCalendarOpen(true);
        setWhereOpen(false);
        setGuestOpen(false);
        setCheckOutOpen(false);

    }

    const handleCheckOut = () => {
        setCheckOutOpen(true);
        setCalendarOpen(true);
        setWhereOpen(false);
        setCheckinOpen(false);
        setGuestOpen(false);
    }

    const handleGuest = () => {
        setGuestOpen(true);
        setWhereOpen(false);
        setCheckinOpen(false);
        setCheckOutOpen(false);
        setCalendarOpen(false);
        setFlexOption(false);
    }

    const handleFlex = () => {
        setDatesTab(false)
        setFlexOption(true);
        setGuestOpen(false);
        setWhereOpen(false);
        setCheckinOpen(false);
        setCheckOutOpen(false);
        setCalendarOpen(true);
        setBtnSwitch(false);
    }

    const handleChoice = () => {
        setDatesTab(true);
        setFlexOption(false);
        setBtnSwitch(true);
    }

    const handleFlexSwitch = () => {
        setCalendarOpen(true);
        setFlexOption(true);
        setGuestOpen(false);
        setWhereOpen(false);
    }

    useEffect(() => {
        if(totalGuests === 0){
            setGuestSubtext('Add guests');
            setFontWeight('normal');
        }else if(totalGuests === 1 && totalInfants === 0 && totalPets === 0) {
            setGuestSubtext(`${totalGuests} guest`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 0 && totalPets === 0) {
            setGuestSubtext(`${totalGuests} guests`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants === 1 && totalPets === 0) {
            setGuestSubtext(`${totalGuests} guest, ${totalInfants} infant`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants > 1 && totalPets === 0) {
            setGuestSubtext(`${totalGuests} guest, ${totalInfants} infants`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 1 && totalPets === 0){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infant`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants > 1 && totalPets === 0){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infants`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants === 0 && totalPets === 1){
            setGuestSubtext(`${totalGuests} guest, ${totalPets} pet`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 0 && totalPets === 1){
            setGuestSubtext(`${totalGuests} guests, ${totalPets} pet`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 0 && totalPets > 1){
            setGuestSubtext(`${totalGuests} guests, ${totalPets} pets`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants === 1 && totalPets === 1){
            setGuestSubtext(`${totalGuests} guest, ${totalInfants} infant, ${totalPets} pet`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 1 && totalPets === 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infant, ${totalPets} pet`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 1 && totalPets > 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infant, ${totalPets} pets`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants > 1 && totalPets === 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infants, ${totalPets} pet`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants > 1 && totalPets > 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infants, ${totalPets} pets`);
            setFontWeight('bold');
        }

    }, [totalGuests, totalInfants, totalPets])
    
    return (
        <div id="stay_menu_container" >
            <div className="stay_search_section">
                <div className="popup_wrapper">
                    <button
                        className="selectionBtn"
                        id="whereBtn"
                        style={{background: whereOpen ? 'white' : 'none'}}
                        onClick={handleWhere}
                    > 
                        Where
                        <h3 className="button_subtext">{whereSubtext}</h3>
                    </button>
                    <WhereModal
                        onClose={handleWhereClose}
                        whereOpen={whereOpen}
                    >
                        <WhereMapScreen 
                            setWhereSubtext={setWhereSubtext}
                            setWhereOpen={setWhereOpen}
                            setCalendarOpen={setCalendarOpen}
                            setCheckinOpen={setCheckinOpen}
                            setFlexOption={setFlexOption}
                        />
                    </WhereModal>
                </div>
                    {
                        btnSwitch ? (
                            <>
                                <div 
                                    className="popup_wrapper"
                                    key="checkinContainer"
                                >
                                    <button
                                        className="selectionBtn"
                                        id="checkinBtn"
                                        style={{background: checkinOpen ? 'white' : 'none'}}
                                        onClick={handleCheckIn}
                                    > 
                                        Check in
                                        <h3 className="button_subtext">{checkInSubtext}</h3>
                                    </button>
                                </div>
                                <div 
                                    className="popup_wrapper"
                                    key="checkoutContainer"
                                >
                                    <button
                                        className="selectionBtn"
                                        id="checkOutBtn"
                                        style={{background: checkOutOpen ? 'white' : 'none'}}
                                        onClick={handleCheckOut}
                                    > 
                                        Check out
                                        <h3 className="button_subtext">{checkOutSubtext}</h3>
                                    </button>
                                </div>
                            </>
                        ) : (
                                <div className="flex_wrapper">
                                    <button
                                        className="flex_menuBtn"
                                        style={{background: flexOption ? 'white' : 'none'}}
                                        onClick={handleFlexSwitch}
                                    >
                                        When
                                        <h3 
                                            className="button_subtext"
                                        >
                                            {flexSubtext}
                                        </h3>
                                    </button>
                                </div>
                        )
                
                    }
                    <CheckInModal
                        calendarOpen={calendarOpen}
                    >
                        <div id="tab_holder">
                            <button
                                id='date_tabBtn'
                                style={{background: datesTab ? 'white' : 'none'}}
                                onClick={handleChoice}
                            >
                                Choose dates
                            </button>
                            <button
                                id='date_tabBtn'
                                style={{background: datesTab ? 'none' : 'white' }}
                                onClick={handleFlex}
                            >
                                Flexible dates
                            </button>
                        </div>
                        {
                            datesTab
                            ? <StayCalendarContainer 
                                setCheckInSubtext={setCheckInSubtext}
                                setCheckOutSubtext={setCheckOutSubtext}
                                setCheckOutOpen={setCheckOutOpen}
                                setCheckinOpen={setCheckinOpen}
                            />
                            : 
                                <FlexDatesMenu 
                                    setFlexSubtext={setFlexSubtext}
                                />
                        }
                    </CheckInModal>                    
                    {
                        btnSwitch ? (
                            <div className="guest_wrapper">
                                <button
                                    className="selectionBtn_join"
                                    id="guestBtn"
                                    style={{background: guestOpen ? 'white' : 'none'}}
                                    onClick={handleGuest}
                                > 
                                    Who
                                    <h3 
                                        className="button_subtext"
                                        style={{fontWeight: fontWeight}}
                                    >
                                        {guestSubtext}
                                    </h3>
                                    <button 
                                        className='search_menu_input'
                                        onClick={() => setSearchHeader(false)}
                                    >
                                        <img 
                                            className='search_menu_icon'
                                            src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/600/FFFFFF/external-magnifying-glass-interface-kiranshastry-lineal-kiranshastry.png'
                                            alt=""
                                        />    
                                        Search
                                    </button>
                                </button>
                            </div>
                        ) : (
                            <div className="flex_guest_wrapper">
                                <button
                                    className="btnSwitch_join"
                                    id="guestBtn"
                                    style={{background: guestOpen ? 'white' : 'none'}}
                                    onClick={handleGuest}
                                > 
                                    Who
                                    <h3 
                                        className="button_subtext"
                                        style={{fontWeight: fontWeight}}
                                    >
                                        {guestSubtext}
                                    </h3>
                                    <button 
                                        className='search_menu_input'
                                        onClick={() => setSearchHeader(false)}
                                    >
                                        <img 
                                            className='search_menu_icon'
                                            src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/600/FFFFFF/external-magnifying-glass-interface-kiranshastry-lineal-kiranshastry.png'
                                            alt=""
                                        />    
                                        Search
                                    </button>
                                </button>
                            </div>
                        )
                    }
                    <GuestModal
                        guestOpen={guestOpen}
                    >
                        <GuestSelection
                            setTotalGuests={setTotalGuests}
                            setTotalInfants={setTotalInfants}
                            setTotalPets={setTotalPets}
                        />
                    </GuestModal>
            </div>
        </div>
    )

}

export default StaySearchMenu;