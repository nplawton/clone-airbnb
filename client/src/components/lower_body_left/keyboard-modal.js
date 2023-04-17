import React from "react";
import ReactDom from "react-dom";

import '../calendar.css';

const KeyboardModal = ({ children, keyboardOpen, onClose }) => {
    
    if(!keyboardOpen) return null;
    return ReactDom.createPortal(
        <>
            <div id="keyboard_overlay" />
            <div id="keyboardModal" >
                {children}
                <button
                    id="keyboard_close"
                    onClick={onClose}
                >
                    Back to calendar
                </button>
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default KeyboardModal;