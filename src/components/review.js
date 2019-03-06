import React from "react";
import "./css/review.css";

export default function Review(props) {
  const { id } = props.match.params;
  const temp = props.location.state.reviews.map(item => {
    if (item.id === id) {
      return (
        <div className="reviewContainer">
          <div className="customHr" />
          <span className="rating-span">{item.rating.toString()}/10</span>
          <img alt="doublejump" className="reviewImg-left" src={item.imgUrl} />
          <div className="reviewTitle">{item.name}</div>
          <span className="reviewBody">{item.description}</span>
          <p className="reviewBody">{item.reviewbody}</p>
          <img alt="doublejump" className="reviewImg-right" src={item.imgTag} />
          <p className="reviewBody">{item.reviewbody}</p>
          <div className="customHr" />
        </div>
      );
    }
  });
  return <div>{temp}</div>;
}
