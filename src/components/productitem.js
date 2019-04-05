import React from "react";
import "./css/productitem.css";

export default function ProductItem({ product, onClick }) {
  return (
    <section className="innerReviewFlex">
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
      </div>
      <div className='orange-text minibutton'>
        ${product.price}
      </div>
      <button className='minibutton' onClick={() => onClick()}>
        ADD TO CART
            </button>
    </section>

  );
}
