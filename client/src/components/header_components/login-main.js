import React, { useState } from "react";

import "./login.css";
import LogInModalOne from "./login-modal-one";
import LogInStart from "./login-start";

const LogInButton = ({ signedIn, setSignedIn, siteUsers }) => {

    
    const [logInWin, setLogInWin] = useState(false);

    const loggedOut = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png';
    
    //Needs to be replaced with User Avatar//
    const loggedIn = 'https://pbs.twimg.com/media/FB_W-xPWUAE996n.jpg';
    
    return (
        <div className="btnWrapper" id="login_main">
            <button
                id="lineBtn"
                onClick={() => logInWin ? setLogInWin(false) : setLogInWin(true)}
            >
                &#9776;
                <img 
                    id="loginId"
                    src={signedIn ? loggedIn : loggedOut}
                    alt=''
                />
            </button>
            <LogInModalOne 
                open={logInWin}
                onClose={() => setLogInWin(false)}
            >
                <LogInStart 
                    setSignedIn={setSignedIn}
                />
            </LogInModalOne>
        </div>
    )
   

}

export default LogInButton;