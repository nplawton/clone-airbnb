import React from "react";
import ReactDom from 'react-dom';

import '../share.css'

const ShareModal = ({ children, shareOpen, onClose }) => {
    
    
    if(!shareOpen) return null;
    return ReactDom.createPortal(

        <>
            <div id="share_overlay" />
            <div id="share_modal">
                <button
                    id="share_close"
                    onClick={onClose}
                >
                    X
                </button>
                {children}
            </div>
        </>,
        document.getElementById('portal')

    )

}

export default ShareModal;