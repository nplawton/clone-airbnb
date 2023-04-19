import React, { useState } from "react";

import "../lowerBody.css"

const clock = 'https://thumb.ac-illust.com/b0/b0e9bcc3a015e478abf93e56c9a3cf4d_t.jpeg';

const flag = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRw1AslYfPE11SEB6TD-oEOKjWy-x8uULF9BWBVDkHCInlIwDk2';

const LowerBodyRight = ({ rating, numReviews, nightPrice }) => {




  return (
    <div id="reserve_win_holder">
      <div id="reserve_win">
        <div id="top_container">
          <div id='pricetexts'>
            <h3 id="price_text1">${nightPrice}</h3>
            <h3 id="price_text2"> night</h3>
          </div>
          <div id='ratingnreviews'>
            <h3 id='rate_text'>&#x2605; {rating} &#183; </h3>
            <a href="reviews">
              <h3 id="review_text">{numReviews} reviews</h3>
            </a>
          </div>
        </div>
        <pre><br></br></pre>
        <div id='res_calendar_holder'>
          <a href="clickcheckin">
            <div id='checkincal'>
              <div id='checkintext'>
                <b>CHECK-IN</b>
                <br></br>
                <div id='checkindate'>
                5/8/2023 {/*insert seed data for clicked date*/}
                </div>
              </div>
            </div>
          </a>
          <a href="clickcheckout">
            <div id='checkoutcal'>
              <div id='checkouttext'>
                <b>CHECKOUT</b>
                <br></br>
                <div id='checkoutdate'>
                5/10/2023 {/*insert seed data for clicked date*/}
                </div>
              </div>
            </div>
          </a>
          <a href="clickguests" style={{textDecoration:'none'}}>
            <div id='guestscal'>
              <div id='guestscaltext'>
                <b>GUESTS</b>
                <div id='guestscounttext'>
                  1 guest
                </div>
              </div>
              <div id='rescarrot'>
                &#8964;
                </div>
            </div>
          </a>
        </div>
        <br></br>
        <button id='reservebutt'>
          <div id='reservetext'>
            Reserve
          </div>
        </button>
        <div className="save_win">
          <div id="save_column">
            <h1 id="save_title">Book now and save 20%.</h1>
            <h3 id='save_subtext'> 
              Hank is offering a 1-time discount for your trip dates. Book soon to get this special offer.
            </h3>
          </div>
          <div id="save_img">
            <img 
              src={clock}
              id="save_clock"
              alt=""
            />
          </div>
      </div>
      <button id="reportBtn">
          <img 
            src={flag}
            id="flag_img"
            alt=""
          />
          Report this listing
      </button>
      </div>
    </div>
  )

}

export default LowerBodyRight;