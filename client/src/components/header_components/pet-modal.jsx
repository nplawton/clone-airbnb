import React from 'react';
import ReactDOM from 'react-dom';

import "../extendedSearch.css";

const PetModal =({ children, petScreen, onClose }) => {
    
    if(!petScreen) return null
    return ReactDOM.createPortal(
        <div id='pet_modal'>
            <button
                id='pet_modal_close'
                onClick={onClose}
            >
                X
            </button>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default PetModal;