import React, { useEffect, useState } from "react";
import "../extendedSearch.css";

import WhereModal from "./where_modal";
import ExpWhereMapScreen from "./exp-where-map-screen";
import ExpGuestModal from "./exp-guest-modal";
import ExpGuestSelection from './exp-guest-selection-screen';
import CheckInModal from "./chekin-modal";
import ExpCalendarContainer from "./exp-calendar-container";

const ExpSearchMenu = ({ setSearchHeader }) => {

    const [whereSubtext, setWhereSubtext] = useState('SearchDestinations');
    const [calendarSubtext, setCalendarSubtext] = useState('Add Dates');
    const [guestSubtext, setGuestSubtext] = useState('Add guests');
    const [whereOpen, setWhereOpen] = useState(true);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [guestOpen, setGuestOpen] = useState(false);
    const [totalGuests, setTotalGuests] = useState(0);
    const [totalInfants, setTotalInfants] = useState(0);
    const [fontWeight, setFontWeight] = useState('normal');

    const handleWhere = () => {
        setWhereOpen(true);
        setCalendarOpen(false);
        setGuestOpen(false);
    }

    const handleCalendar = () => {
        setCalendarOpen(true);
        setWhereOpen(false);
        setGuestOpen(false);

    }

    const handleGuest = () => {
        setGuestOpen(true);
        setWhereOpen(false);
        setCalendarOpen(false);
    }

    useEffect(() => {
        if(totalGuests === 0){
            setGuestSubtext('Add guests');
            setFontWeight('normal');
        }else if(totalGuests === 1 && totalInfants === 0) {
            setGuestSubtext(`${totalGuests} guest`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 0) {
            setGuestSubtext(`${totalGuests} guests`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants === 1) {
            setGuestSubtext(`${totalGuests} guest, ${totalInfants} infant`);
            setFontWeight('bold');
        }else if (totalGuests === 1 && totalInfants > 1) {
            setGuestSubtext(`${totalGuests} guest, ${totalInfants} infants`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants === 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infant`);
            setFontWeight('bold');
        }else if (totalGuests > 1 && totalInfants > 1){
            setGuestSubtext(`${totalGuests} guests, ${totalInfants} infants`);
            setFontWeight('bold');
        }
    }, [totalGuests, totalInfants]);

    return (
        <div id="exp_menu_container">
            <div id="exp_search_section">
                <div className="popup_wrapper">
                    <button
                        id="exp_whereBtn"
                        style={{background: whereOpen ? 'white' : 'none'}}
                        onClick={handleWhere}
                    > 
                        Where
                        <h3 className="button_subtext">{whereSubtext}</h3>
                    </button>
                    <WhereModal
                        onClose={() => setWhereOpen(false)}
                        whereOpen={whereOpen}
                    >
                        <ExpWhereMapScreen 
                            setWhereSubtext={setWhereSubtext}
                            setWhereOpen={setWhereOpen}
                            setCalendarOpen={setCalendarOpen}
                        />
                    </WhereModal>
                </div>
                <div className="popup_wrapper">
                    <button
                        id="calendarBtn"
                        style={{background: calendarOpen ? 'white' : 'none'}}
                        onClick={handleCalendar}
                    > 
                        Check in
                        <h3 className="button_subtext">{calendarSubtext}</h3>
                    </button>
                    <CheckInModal
                        calendarOpen={calendarOpen}
                    >
                        <ExpCalendarContainer 
                            setCalendarSubtext={setCalendarSubtext}
                        />
                    </CheckInModal>
                </div>
                <div className="guest_wrapper">
                    <button
                        className="exp_selectionBtn_join"
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
                            className='exp_search_menu_input'
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
                    <ExpGuestModal
                        guestOpen={guestOpen}
                    >
                        <ExpGuestSelection 
                            setTotalInfants={setTotalInfants}
                            setTotalGuests={setTotalGuests}
                        />
                    </ExpGuestModal>
                </div>
            </div>
        </div>
    )

}

export default ExpSearchMenu