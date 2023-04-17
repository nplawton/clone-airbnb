import React from "react";
import ReactDOM from 'react-dom';

import "../extendedSearch.css";

const ExpMenuModal = ({ children, onClose, expMenu }) => {
    
    if(!expMenu) return null;
    return ReactDOM.createPortal(
        <div id="exp_modal" >
            <button
                id="expBtn"
                onClick={onClose}
            >
                
            </button>
            {children}
        </div>,
        document.getElementById('portal')
    )

}

export default ExpMenuModal;