import React from "react";
import ReactDOM from 'react-dom';

import "../amenity.css";

const AirModal = ({ children, airOpen, onClose }) => {
    
    if(!airOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div id='air_overlay' />
            <div id="air_modal" >
                <button
                    onClick={onClose}
                    id='air_close'           
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default AirModal;