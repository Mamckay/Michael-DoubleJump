import React from "react";
import { fetchCart } from "../actions/index";
import { connect } from "react-redux";
import CartItem from "./cartitem";
import { clearAll } from "../actions";
import { Link } from "react-router-dom";
import "./css/cart.css";

class Cart extends React.Component {
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
    if (this.props.cart.length === 0) {
      return (
        <div className="cartItems">
          <p>Your cart is empty!</p>
          <p>Dont miss out on the great deals we have visit our store today!</p>
        </div>
      );
    } else {
      return (
        <div className="cartItems">
          <div>{this.listCart()}</div>
          <div className="customHr" />
          <div className="checkout-bar">
            <span>Total: {this.renderTotal()} plus tax</span>
            <Link to="/order">Checkout</Link>
            <button onClick={() => this.props.dispatch(clearAll())}>
              Clear cart
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.session.currentUser,
  cart: state.cart.items
});

export default connect(mapStateToProps)(Cart);
