import React from "react";
import ReactDOM from 'react-dom';

import "./login.css";

const LogInModalOne = ({ children, open, onClose }) => {
    
    if(!open) return null;
    return ReactDOM.createPortal(
        <div id="login_modal" >
            <button
                id="modal_one_Btn"
                onClick={onClose}
            >
                
            </button>
            {children}
        </div>,
        document.getElementById('portal')
    )

}

export default LogInModalOne;