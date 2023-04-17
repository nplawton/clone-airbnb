import React from "react";
import ReactDOM from 'react-dom';

import "../extendedSearch.css";

const StayMenuModal = ({ children, onClose, stayMenu }) => {
    
    if(!stayMenu) return null;
    return ReactDOM.createPortal(
        <div id="stay_modal" >
            <button
                id="stayBtn"
                onClick={onClose}
            >
                
            </button>
            {children}
        </div>,
        document.getElementById('portal')
    )

}

export default StayMenuModal;