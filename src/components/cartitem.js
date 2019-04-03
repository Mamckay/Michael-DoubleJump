import React from "react";

export default function CartItem(props) {
  return (
    <li className='cart-item'>
      <span className='orange-text'>{props.item.name}</span> <span className='price'>{props.item.price}</span>
    </li>
  );
}
