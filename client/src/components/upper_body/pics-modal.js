import React from "react";
import ReactDOM from 'react-dom';

import "../mainpics.css"

const PicsModal = ({ children, picsOpen, onClose }) => {
    
    if(!picsOpen) return null;
    return ReactDOM.createPortal(
        <>
            <div id='pics_overlay' />
            <div  id="pics_modal">
                <button
                    id="pics_closeBtn"
                    onClick={onClose}
                >
                    &lt;
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )

}

export default PicsModal;