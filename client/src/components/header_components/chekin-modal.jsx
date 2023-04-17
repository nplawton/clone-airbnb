import React from 'react';
import ReactDOM from 'react-dom';

import "../extendedSearch.css";

const CheckInModal = ({ children, calendarOpen }) => {

    if(!calendarOpen) return null;
    return ReactDOM.createPortal(
        <div id='checkin_modal'>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default CheckInModal;