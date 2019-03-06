import React from "react";
import "./css/sidenav.css";

export default class SideNav extends React.Component {
  createCart = () => {
    return (
      <button
        onClick={e => {
          e.preventDefault();
        }}
      >
        Checkout
      </button>
    );
  };
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <a href="one" id="cart">
          {this.createCart()}
        </a>
      </div>
    );
  }
}
