import React from "react";
import ReactDOM from "react-dom";

import "../extendedSearch.css";

const ExpGuestModal = ({ children, guestOpen }) => {

    if(!guestOpen) return null;
    return ReactDOM.createPortal(

        <div className="exp_guest_modal" >
            {children}
        </div>,
        document.getElementById('portal')

    )
}

export default ExpGuestModal;