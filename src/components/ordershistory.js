import React from "react";
import "./css/ordershistory.css";

export default function OrdersHistory(props) {
  const itemList = items => {
    return items.map((item, index) => {
      return <li key={index} className="deliveryItem">{item.name}</li>;
    });
  };
  const listMaker = (order, index) => {
    return (
      <li className="order-list" key={index}>
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
      return <ul key={index}>{listMaker(order, index)}</ul>;
    } else {
      return <span key={index}>No Orders</span>;
    }
  });
  return (
    <section>
      <div className="customHr" />
      {list}
    </section>
  );
}
