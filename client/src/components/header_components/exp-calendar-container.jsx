import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import '../calendar.css';

const ExpCalendarContainer = ({ setCalendarSubtext }) => {
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(null);


  useEffect(() => {
    if (!checkinDate && !checkoutDate){
        setCalendarSubtext('Add dates');
    }else{
        const checkinDateString = checkinDate.toLocaleDateString();
        const checkoutDateString = checkoutDate instanceof Date ? checkoutDate.toLocaleDateString() : '';
        setCalendarSubtext(`${checkinDateString} - ${checkoutDateString}`);
    }
  }, [checkinDate, checkoutDate]);

  const handleCheckinDate = (date) => {
    setCheckinDate(date);
    if (checkoutDate && checkoutDate < date) {
        setCheckoutDate('');
    }
  };

  const handleCheckoutDate = (date) => {
    setCheckoutDate(date);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(checkinDate.getFullYear(), checkinDate.getMonth() - 1, 1);
    const newCheckoutDate = new Date(checkoutDate);
    if(checkoutDate && prevMonth > checkoutDate){
        newCheckoutDate.setMonth(prevMonth.getMonth());
        setCheckoutDate(newCheckoutDate);
    }
    setCheckinDate(prevMonth);
  };

  const handleNextMonth = () => {
    
    const nextMonth = new Date(checkoutDate ? checkoutDate.getFullYear() : checkinDate.getFullYear(), checkoutDate ? checkoutDate.getMonth() : checkinDate.getMonth() +1, 1);
    setCheckinDate(nextMonth);
    
    // const nextMonth = new Date(checkinDate.getFullYear(), checkinDate.getMonth() + 1, 1);
    // const newCheckoutDate = new Date(checkoutDate);
    // if (checkoutDate && nextMonth > new Date(checkinDate.getFullYear(), checkinDate.getMonth() + 1, 0)) {
    //   newCheckoutDate.setMonth(nextMonth.getMonth());
    //   setCheckoutDate(newCheckoutDate);
    // }
    // setCheckinDate(nextMonth);
  }

  const formatMonthYear = ( { date } = {} ) => {
    if(!date) return '';
    //console.log(date);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
    const monthIndex = date?.getMonth();
    const year = date?.getFullYear();
    return `${monthNames[monthIndex]} ${year}`;
  };

//   console.log(checkinDate);
//   console.log(checkoutDate);

  return (
    <div className='exp_calendar-container'>
      <div className='exp_right'>
            <h2>{formatMonthYear({ date: checkinDate })}</h2>
            <Calendar 
                value={checkinDate} 
                onChange={handleCheckinDate}
                minDate={new Date()}
                maxDate={checkoutDate ? new Date(checkoutDate.getFullYear(), checkoutDate.getMonth(), 1) : null}
                locale={{
                    formatMonthYear: ({ date }) => formatMonthYear({ date }),
                }}
                // showNavigation={false} 
            />
            {/* <h3>{checkinDate ? checkinDate.toLocaleDateString() : ''}</h3> */}
        </div>
        <div className='exp_left'>
            <div className="exp_month_nav">
                <button 
                    id='navBtn'
                    onClick={handlePrevMonth}
                >
                    &lt;
                </button>
                <h2>{formatMonthYear({date: checkoutDate || checkinDate})}</h2>
                <button 
                    id='navBtn'
                    onClick={handleNextMonth}
                >
                    &gt;
                </button>
            </div>
            <Calendar
                value={checkoutDate}
                onChange={handleCheckoutDate}
                minDate={checkinDate}
                maxDate={new Date(checkinDate.getFullYear(), checkinDate.getMonth() + 2 , 0)}
                prev2Label="&#10094;&#10094;"
                next2Label="&#10095;&#10095;"
                prevLabel="&#10094;"
                nextLabel="&#10095;"
                locale={{
                    formatMonthYear: ({ date }) => formatMonthYear({ date }),
                }}
                // showNavigation={false}
            />
            {/* <h3>{checkoutDate ? checkoutDate.toLocaleDateString() : ''}</h3> */}
        </div>
    </div>
  );
};

export default ExpCalendarContainer;