import React from "react";

export default function CartItem(props) {
  return (
    <li>
      <span className='orange-text'>{props.item.name}</span>: <span>{props.item.price}</span>
    </li>
  );
}
