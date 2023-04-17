import React, { useState } from "react";
import '../share.css'
import ShareModal from "./share-modal";
import ShareInterface from "./share-interface";

const ShareBtn = ({ propertyName, propImages }) => {

    const [shareOpen, setShareOpen] = useState(false);
    
    const share = 'https://icons.veryicon.com/png/o/miscellaneous/first/share-163.png';
    
    return(
        <div className="share_wrapper" id="share_container">
            <button
                id="shareBtn"
                onClick={() => setShareOpen(true)}
            >
                <img 
                    src={share}
                    id="share_img"
                    alt=""
                />
                Share
            </button>
            <ShareModal
                shareOpen={shareOpen}
                onClose={() => setShareOpen(false)}
            >
                <ShareInterface 
                    propImages={propImages}
                    propertyName={propertyName}
                />
            </ShareModal>
        </div>
    )

    
    
};

export default ShareBtn;