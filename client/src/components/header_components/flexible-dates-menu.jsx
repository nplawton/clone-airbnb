import React, { useEffect, useState } from 'react';

import "../extendedSearch.css";

const FlexDatesMenu = ({ setFlexSubtext }) => {

    const [vacaType, setVacaType] = useState('Any');
    const [vacaOptions, setVacaOptions] = useState('weekend');
    const [start, setStart] = useState(0);

    const buttons = [
        { label: 'April', year: '2023' },
        { label: 'May', year: '2023' },
        { label: 'June', year: '2023' },
        { label: 'July', year: '2023' },
        { label: 'August', year: '2023' },
        { label: 'September', year: '2023' },
        { label: 'October', year: '2023' },
        { label: 'November', year: '2023' },
        { label: 'December', year: '2023' },
        { label: 'January', year: '2024' },
        { label: 'February', year: '2024' },
        { label: 'March', year: '2024' }
    ];

    const handlePrevClick = () => {
        if(start > 0){
            setStart(start - 1);
        }
    };

    const handleNextClick = () => {
        if(start < buttons.length - 6){
            setStart(start + 1);
        }
    }


    useEffect(() => {
        setFlexSubtext(`${vacaType} ${vacaOptions}`);
    }, [vacaType, vacaOptions]);

    const calendarIcon = 'https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg';

    return(
        <div className='flex_container'>
            <h1 id='flex_start'>Stay for a {vacaOptions}</h1>
            <div className='vaca_holder'>
                <button 
                    id='vacaBtn'
                    onClick={() => setVacaOptions('weekend')}
                >
                    Weekend
                </button>
                <button 
                    id='vacaBtn'
                    onClick={() => setVacaOptions('week')}
                >
                    Week
                </button>
                <button 
                    id='vacaBtn'
                    onClick={() => setVacaOptions('month')}
                >
                    Month
                </button>
            </div>
            <h1 id='flex_start'>Go {vacaType}</h1>
            <div className='range_holder'>
                {buttons.slice(start, start + 6).map((button, index) => (
                    <button
                        key={index} 
                        onClick={() => setVacaType(button.label)}
                        id='rangeBtn'
                    >
                        <img 
                            src={calendarIcon}
                            id='range_img'
                            alt=''
                        />
                        <h1 id='month_text'>{button.label}</h1>
                        <h3 id='year_text'>{button.year}</h3>
                    </button>
                ))}
            </div>
            <div>
                <button 
                    id='prev_option_btn'
                    onClick={handlePrevClick} disabled={start === 0}
                >
                    &#60;
                </button>
                <button
                    id='next_option_btn' 
                    onClick={handleNextClick} disabled={start >= buttons.length - 6}
                >
                    &#62;
                </button>
            </div>
        </div>
    )

}

export default FlexDatesMenu;