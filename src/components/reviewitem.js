import React from "react";
import { Link } from "react-router-dom";

export default function ReviewItem({ reviews, review }) {
  return (

    <div className="innerReviewFlex">
      <img className="imgTopReviews" src={review.imgUrl} alt="review" />
      <div class='review-description-container'>
        <Link
          to={{
            pathname: `review/${review.id}`,
            state: { reviews: reviews }
          }}
          className="titleTopReviews"
        >
          {review.name}
        </Link>
        <br />
        <span className='white-text'><span className='orange-text'>Genre: </span>{review.genre}</span>
        <br></br>
        <span className='orange-text'>
          {" "}
          Author: <span className='white-text'>{review.author}</span>
          <br></br>
          <span className='white-text'>{review.description}</span>
        </span>
        <br></br>
        <span className="orange-text">Avg Rating: {review.rating.toString()}/10</span>
      </div>
    </div>

  );
}
