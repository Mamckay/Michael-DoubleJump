import React from "react";
import "./css/ordershistory.css";

export default function OrdersHistory(props) {
  const itemList = items => {
    return items.map(item => {
      return <li className="deliveryItem">{item.name}</li>;
    });
  };
  const listMaker = (order, index) => {
    return (
      <li className="order-list" key={index}>
        <span className="orderText">
          Order Delivered: {order.completed.toString()}
        </span>
        <ul>{itemList(order.items)}</ul>
        <br />
        <span className="orderText">{order.address}</span>
        <br />
        <span className="orderText">
          Delivery date: {order.shipdate.split("T")[0]}
        </span>
        <div className="customHr" />
      </li>
    );
  };
  const list = props.orders.map((order, index) => {
    if (order.shipdate) {
      return <div>{listMaker(order, index)}</div>;
    } else {
      return <span>No Orders</span>;
    }
  });
  return (
    <div>
      <div className="customHr" />
      {list}
    </div>
  );
}
