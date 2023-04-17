import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./login.css";
import LogInModalTwo from "./login-modal-two";
import SignupScreen from "./login-signup";

const LogInStart = ({ setSignedIn }) => {
  
    const [signUpWin, setSignUpWin] = useState(false);
    
  return (
    <div id="logInWin">
        <div className="btnWrapper" id="login_signup" >
            <button
                id="signBtn"
                onClick={() => setSignUpWin(true)}
            >
                Sign up
            </button>
            <LogInModalTwo
                open={signUpWin}
                onClose={() => setSignUpWin(false)}
            >
                <SignupScreen 
                    setSignedIn={setSignedIn}
                    setSignUpWin={setSignUpWin}
                />
            </LogInModalTwo>
        </div>
        <div className="btnWrapper" id="login_signup" >
            <button
                id="signBtn"
                onClick={() => setSignUpWin(true)}
            >
                Log in
            </button>
            <LogInModalTwo
                open={signUpWin}
                onClose={() => setSignUpWin(false)}
            >
                <SignupScreen 
                    setSignedIn={setSignedIn}
                    setSignUpWin={setSignUpWin}
                />
            </LogInModalTwo>
        </div>
        <button id="disableLogin">Crackbnb your home</button>
        <button id="disableLogin">Help</button>
    </div>
  )

}

export default LogInStart;