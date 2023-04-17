import React from "react";
import ReactDOM from 'react-dom';

import "../amenity.css";

const PropInfoModal = ({ children, propInfoOpen, onClose }) => {
    
    if(!propInfoOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div id='air_overlay' />
            <div id="land_modal" >
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

export default PropInfoModal;