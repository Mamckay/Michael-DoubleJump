import React from "react";
import "./css/productitem.css";

export default function ProductItem({ product, onClick }) {
  return (
    <section className="innerReviewFlex">
      <img className="imgTopReviews" src={product.imgUrl} alt="review" />
      <div className='orange-text mini'>
        {product.name}
        <br></br>
        <span className='orange-text'>
          {" "}
          Description: <span className='white-text '>{product.author}</span>
          <br></br>
          <span className='white-text'>{product.description}</span>
        </span>
        <br></br>
        <button onClick={() => onClick()} className="buyButton">
          Add to cart
            </button>
      </div>
      <button className='minibutton' onClick={() => onClick()}>
        Add to cart
            </button>
    </section>
  );
}
