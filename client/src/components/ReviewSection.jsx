import React from 'react';

import './reviews.css'
import UserReviews from './Review/UserReviews'

function ReviewSection() {
    return (
        <div id="review_section">
            <div id="review_ratings">
                &#9733; {/*property rating*/} 4.65 &#8901; {/*property reviewsNum*/}9 reviews
            </div>
            <div id="review_categories">
                <div id="left">
                    <div id="rev_cat_left">
                        <label for="clean">
                            Cleanliness
                        </label>
                            <p></p>
                        <label for="comm">
                            Communication
                        </label>
                            <p></p>
                        <label for="check">
                            Check-in
                        </label>
                    </div>
                    <div id="rev_bar_left">
                        <progress
                            id="clean" value="98" max="100"> 98%
                        </progress> 4.9
                            <p></p>
                        <progress
                            id="comm" value="95" max="100"> 94%
                        </progress> 4.8
                            <p></p>
                        <progress
                            id="check" value="95" max="100"> 95%
                        </progress> 4.8
                    </div>
                </div>
                <div id="right">
                    <div id="rev_cat_right">
                        <label for="acc">
                            Accuracy
                        </label>
                            <p></p>
                        <label for="loc">
                            Location
                        </label>
                            <p></p>
                        <label for="value">
                            Value
                        </label>
                    </div>
                    <div id="rev_bar_right">
                        <progress
                            id="acc" value="98" max="100"> 99%
                        </progress> 4.9
                            <p></p>
                        <progress
                            id="loc" value="98" max="100"> 98%
                        </progress> 4.9
                            <p></p>
                        <progress
                            id="value" value="100" max="100"> 100%
                        </progress> 5.0
                    </div>
                </div>
            </div>
            <UserReviews/>
        </div>
    )
}
export default ReviewSection;