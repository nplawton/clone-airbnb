import React from "react";

import '../calendar.css';

const KeyboardInterface = () => {
    
    const enter = "https://icons.veryicon.com/png/o/miscellaneous/effevo/enter-12.png";
    const horArrows = "https://www.svgrepo.com/show/364203/arrows-out-line-horizontal-fill.svg";
    const vertArrows = 'https://www.svgrepo.com/show/364204/arrows-out-line-vertical-fill.svg';
    const question = 'https://static.thenounproject.com/png/1049389-200.png';

    return(
        <div id="key_int_div" >
            <h1 id="key_title" > Keyboard shortcuts </h1>
            <h3 id="key_bullets">
                <img 
                    src={enter}
                    id="key_short"
                    alt=""
                />
                Select the date in focus
            </h3>
            <h3 id="key_bullets">
                <img 
                    src={horArrows}
                    id="key_short"
                    alt=""
                />
                Move backward (left) and forward (right) by one day
            </h3>
            <h3 id="key_bullets">
                <img 
                    src={vertArrows}
                    id="key_short"
                    alt=""
                />
                Move backward (up) and forward (down) by one week
            </h3>
            <h3 id="key_bullets">
                <span id="key_short1" role="img">PGUP/PGDGDN</span>
                Switch months
            </h3>
            <h3 id="key_bullets">
                <span id="key_short1" role="img">HOME/END</span>
                Go to the first or last day of a week
            </h3>
            <h3 id="key_bullets">
                <img 
                    src={question}
                    id="key_short"
                    alt=""
                />
                Open this panel
            </h3>
        </div>
    )

}

export default KeyboardInterface;