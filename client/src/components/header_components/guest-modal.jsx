import React from "react";
import ReactDOM from "react-dom";

import "../extendedSearch.css";

const GuestModal = ({ children, guestOpen }) => {

    if(!guestOpen) return null;
    return ReactDOM.createPortal(

        <div className="guest_modal" >
            {children}
        </div>,
        document.getElementById('portal')

    )
}

export default GuestModal;