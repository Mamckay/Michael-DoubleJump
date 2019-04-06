import React from "react";
import "./css/productitem.css";

export default function ProductItem({ product, onClick, history }) {
  return (
    <section className="innerProductFlex">
      <img className="imgTopReviews" src={product.imgUrl} alt="review" />
      <div className='orange-text mini'>
        {product.name}
        <span className='orange-text'>
          Description: <span className='white-text '>{product.author}</span>
          <span className='white-text'>{product.description}</span>
        </span>
        ${product.price}
        <button className='bigbutton' onClick={() => onClick()}>
          ADD TO CART
            </button>
        <button className='bigbutton' onClick={() => history.push(`/review/${product.reviewId}`)}>
          REVIEWS
          </button>
      </div>
      <div className='orange-text minibutton'>
        ${product.price}
      </div>
      <button className='minibutton' onClick={() => onClick()}>
        ADD TO CART
            </button>
      <button className='minibutton' onClick={() => history.push(`/review/${product.reviewId}`)}>
        REVIEWS
            </button>
    </section>

  );
}
