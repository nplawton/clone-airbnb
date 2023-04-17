import React from "react";
import ReactDom from 'react-dom';

import '../share.css';

const MoreOptionsModal = ({ children, moreOptions, onClose }) => {
    
    if(!moreOptions) return null;
    return ReactDom.createPortal(
        <>
            <div id="share_modal2">
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

export default MoreOptionsModal;