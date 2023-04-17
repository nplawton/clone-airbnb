import React from "react";
import ReactDOM from 'react-dom';

import '../extendedSearch.css'


const SearchModal = ({ children, searchHeader, onClose }) => {
    if(!searchHeader) return null;
    return ReactDOM.createPortal(
        <>
            <div 
                id='overlay_search' 
                onClick={onClose}
            />
            <div id="searchModal">
                <button
                    onClick={onClose}
                    id='first_searchBtn'
                >
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
export default SearchModal;