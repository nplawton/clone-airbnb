import React, { useState } from "react";

import '../share.css';
import MoreOptionsModal from "./more-options-modal";
import OptionsInterface from "./more-options-interface";

const ShareInterface = ({ propertyName, propImages }) => {
    
    const [moreOptions, setMoreOptions] = useState(false);

    //Update with data image
    const siteImg = propImages[0].image || 'https://i.pinimg.com/originals/40/50/b9/4050b9014825ca4dbef3ad65cac9251e.png';

    const copy = "https://www.nicepng.com/png/full/232-2328361_app-copy-app-copy-app-copy-copy-icon.png";
    const email = "https://static.thenounproject.com/png/1003621-200.png";
    const messages = "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png";
    const whatsapp = "https://cdn-icons-png.flaticon.com/512/124/124034.png";
    const messenger = "https://www.maxpixel.net/static/photo/1x/Symbol-Networking-Social-Media-Messenger-Icon-Logo-6062240.png";
    const facebook = 'https://cdn.iconscout.com/icon/free/png-256/facebook-108-432507.png?f=webp&w=256';
    const twitter = "https://cdn2.iconfinder.com/data/icons/social-media-square-set/960/Twitter_Sq-512.png";
    const embed = "https://cdn.onlinewebfonts.com/svg/img_1668.png";

    const siteName = propertyName || 'Tree House on Lake Travis #15';

    return(

        <div id='interface_container'>
            <h1 id="share_title">Share this place</h1>
            <h3 id="share_site_name">
                <img 
                    src={siteImg}
                    id="share_site_img"
                    alt=""
                />
                 {siteName}
            </h3>
            <div id="shareBtn_container">
                <button
                    id="optionBtn"
                >
                    <img 
                        src={copy}
                        id="option_img"
                        alt=""
                    />
                    Copy Link
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={email}
                        id="option_img"
                        alt=""
                    />
                    Email
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={messages}
                        id="option_img"
                        alt=""
                    />
                    Messages
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={whatsapp}
                        id="option_img"
                        alt=""
                    />
                    WhatsApp
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={messenger}
                        id="option_img1"
                        alt=""
                    />
                    Messenger
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={facebook}
                        id="option_img"
                        alt=""
                    />
                    Facebook
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={twitter}
                        id="option_img1"
                        alt=""
                    />
                    Twitter
                </button>
                <button
                    id="optionBtn"
                >
                    <img 
                        src={embed}
                        id="option_img"
                        alt=""
                    />
                    Embed
                </button>
                <div className="share_wrapper">
                    <button
                        id="optionBtn"
                        onClick={() => setMoreOptions(true)}
                    >
                        &#x2686;&#x2686;&#x2686; More options
                    </button>
                    <MoreOptionsModal
                        moreOptions={moreOptions}
                        onClose={() => setMoreOptions(false)}
                    >
                        <OptionsInterface />
                    </MoreOptionsModal>
                </div>
            </div>
        </div>

    )
    

}

export default ShareInterface;