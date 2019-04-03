import React from "react";
import { fetchCart } from "../actions/index";
import { connect } from "react-redux";
import CartItem from "./cartitem";
import { clearAll } from "../actions";
import "./css/cart.css";

class Cart extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCart());
  }
  renderTotal() {
    let temp = 0;
    this.props.cart.map(item => {
      return temp = Number(item.price) + Number(temp);
    })
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
        <section className="empty-cart">
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
            <span className='price'><span className='orange-text'>Total: </span>{this.renderTotal()}</span>
          </div>
          <div className='checkout-bar'>
            <button className='checkout-button' onClick={() => this.props.dispatch(clearAll())}>
              Clear cart
              </button>
            <button onClick={() => this.props.history.push('./order')} className='checkout-button'>Checkout</button>
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
