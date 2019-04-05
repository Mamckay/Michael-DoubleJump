import React from "react";
import { Link } from "react-router-dom";

export default function ReviewItem({ reviews, review }) {
  return (
    <Link
      to={{
        pathname: `review/${review.id}`,
        state: { reviews: reviews }
      }}
      className="titleTopReviews"
    >
      <section className="innerReviewFlex">
        <img className="imgTopReviews" src={review.imgUrl} alt="review" />
        <div className='review-description-container'>
          {review.name}
          <span className='white-text'><span className='orange-text'>Genre: </span>{review.genre}</span>
          <span className='orange-text'>
            Author: <span className='white-text'>{review.author}</span>
            <span className='white-text'>{review.description}</span>
          </span>
          <span className="orange-text">Avg Rating: {review.rating.toString()}/10</span>
        </div>
      </section>
    </Link>

  );
}
