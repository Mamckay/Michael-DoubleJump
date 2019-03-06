import React from "react";

export default function CartItem(props) {
  return (
    <div>
      {props.item.name}: {props.item.price}
    </div>
  );
}
