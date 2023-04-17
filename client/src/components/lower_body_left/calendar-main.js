import React, {useState} from 'react';
import Calendar from 'react-calendar';

import '../calendar.css';
import KeyboardModal from './keyboard-modal';
import KeyboardInterface from './keyboard-interface';

const CalendarMain = () => {
    
    const [date, setDate] = useState(new Date());
    const [keyboardOpen, setKeyboardOpen] = useState(false);


    const keyboard = 'https://cdn-icons-png.flaticon.com/512/4854/4854275.png';
    
    return(
        <div id="calendarDiv">
            <div  id="calendar_main">
                <h1 className='header'>React Calendar with Range</h1>
                {date.length > 0 ? (
                    <p>
                        <span>Start</span>{' '} {date[0].toDateString()}
                        &nbsp; to &nbsp;
                        <span> End </span>{date[1].toDateString()}
                    </p>
                        ) : (
                    <p>
                        <span>Default selected date:</span>{' '} {date.toDateString()}
                    </p>
                )}
                <div >
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                </div>
            </div>
            <div id='calendar_footer'>
                <div className='keyWrapper' id='keyboard_container'>
                    <button
                        id='keyboardBtn'
                        onClick={() => setKeyboardOpen(true)}
                    >
                        <img 
                            id='keyboardImg'
                            src={keyboard}
                            alt=''
                        />
                    </button>
                    <KeyboardModal
                        keyboardOpen={keyboardOpen}
                        onClose={() => setKeyboardOpen(false)}
                    >
                        <KeyboardInterface />
                    </KeyboardModal>
                </div>
                <button id='clearBtn'>
                    Clear Dates
                </button>
            </div>
        </div>
    )

}

export default CalendarMain;