import React, { useState, useEffect } from 'react';

import '../reviews.css'

function UserReviews() {
       const [reviews, setReviews] = useState([{}]);
   useEffect(() =>{
    getReviews();
  }, [])
    const getReviews = async () =>{
        try {
          const res = await fetch ('http://localhost:5172/properties/1/reviews');
          const text = await res.text();
          console.log(text);
          const data = JSON.parse(text);
          setReviews(data);
        } catch (err) {
          console.error(err);
        }
      }
    return (
        <>
         <div id='review_container'>
            <ul id="reviews">
                {reviews.map((review) => (
                    <li key={review.id} id='rev_map_container'>
                        <div id='rev_main'>
                            <img id="avatars" src={review.avatar} alt=''/>
                            <div>
                                <p id="rev_name">
                                    {`${review.firstname} ${review.lastname}`}
                                </p>
                                <p id='rev_year'>2023</p>
                            </div>
                        </div>
                        <p id="rev_rev">{review.review}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default UserReviews;