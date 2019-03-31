import React from "react";
import "./css/review.css";

export default function Review(props) {
  const { id } = props.match.params;
  const temp = props.location.state.reviews.map((item, index) => {
    if (item.id === id) {
      return (
        <section key={index} className="reviewContainer">
          <div className="customHr" />
          <span className="rating-span">{item.rating.toString()}/10</span>
          <img alt="doublejump" className="reviewImg-left" src={item.imgUrl} />
          <div className="reviewTitle">{item.name}</div>
          <div className="tagline white-text">{item.description}</div>
          <p className="reviewBody">{item.reviewbody}</p>
          <img alt="doublejump" className="reviewImg-right" src={item.imgTag} />
          <p className="reviewBody">{item.reviewbody}</p>
          <div className="customHr" />
        </section>
      );
    }
  });
  return <div>{temp}</div>;
}
