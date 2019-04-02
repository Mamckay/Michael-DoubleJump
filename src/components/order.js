import React from "react";
import { fetchCart } from "../actions/index";
import { connect } from "react-redux";
import CartItem from "./cartitem";
import { setNewOrder, clearAll } from "../actions";
import { Link } from "react-router-dom";
import "./css/cart.css";

class Order extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCart());
  }
  renderTotal() {
    const temp = this.props.cart.length * 59.99;
    return `${temp}`;
  }
  listCart() {
    return this.props.cart.map((item, index) => {
      return <CartItem key={index} item={item} />;
    });
  }
  render() {
    return (
      <section className="cartItems">
        <div>{this.listCart()}</div>
        <div className="customHr" />
        <div className="checkout-bar">
          <span>Total: {this.renderTotal()} plus tax</span>
          <button
            className="checkout-button"
            onClick={() => {
              this.props.dispatch(setNewOrder());
              this.props.dispatch(clearAll());
              this.props.history.push('/complete');
            }}
          >
            Confirm Order
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.currentUser,
  cart: state.cart.items
});

export default connect(mapStateToProps)(Order);
