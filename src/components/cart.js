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
        <section className="cartItems">
          <p className='orange-text'>Your cart is empty!</p>
          <p>Dont miss out on the great deals we have visit our store today!</p>
        </section>
      );
    } else {
      return (
        <section className="cartItems">
          <ul>{this.listCart()}</ul>
          <div className="customHr" />
          <div className="checkout-bar">
            <span><span className='orange-text'>Total: </span>{this.renderTotal()} plus tax</span>
            <Link className='checkout-button' to="/order">Checkout</Link>
            <button className='checkout-button' onClick={() => this.props.dispatch(clearAll())}>
              Clear cart
            </button>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.session.currentUser,
  cart: state.cart.items
});

export default connect(mapStateToProps)(Cart);
