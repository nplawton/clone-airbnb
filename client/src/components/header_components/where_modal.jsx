import React from "react";
import ReactDOM from 'react-dom';

import "../extendedSearch.css";

const WhereModal = ({ children, whereOpen, onClose }) => {
    
    if(!whereOpen) return null;
    return ReactDOM.createPortal(
        <div id="where_modal" >
            <button
                id="where_modal_btn"
                onClick={onClose}
            >
                
            </button>
            {children}
        </div>,
        document.getElementById('portal')
    )

}

export default WhereModal;