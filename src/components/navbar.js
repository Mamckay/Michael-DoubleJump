import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import Banner from "./banner";
import { connect } from "react-redux";
import { logout, relog } from "../actions/auth";

class Navbar extends React.Component {
  componentDidMount() {
    this.setup();
  }
  setup() {
    if (localStorage.getItem('authToken') !== 'null') {
      console.log('token tttttttttttttttttttt')
      this.props.dispatch(relog(localStorage.getItem('authToken')));
    }
  }

  render() {
    if (this.props.user !== null) {
      return (
        <React.Fragment>
          <nav className="topnav">
            <Link to="/">
              <span className="topnav-left" href="#home">
                Home
            </span>
            </Link>
            <Link to="/store">
              <span className="topnav-left" href="#store">
                Store
            </span>
            </Link>
            <img
              src="https://static1.squarespace.com/static/5b43afa4372b9648b4ee1100/t/5b43b33cf950b76063ec5618/1542162228867/?format=1500w"
              alt="cp"
            />
            <span
              className="topnav-right"
              onClick={() => this.props.dispatch(logout())}
            >
              Logout
          </span>
            <Link to="/cart">
              <span className="topnav-right" href="#cart">
                Cart
            </span>
            </Link>
            <Link to="/profile">
              <span className="topnav-right" href="#profile">
                {this.props.user.username}
              </span>
            </Link>
          </nav>
          <Banner />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav className="topnav">
            <Link to="/">
              <span className="topnav-left" href="#home">
                Home
            </span>
            </Link>
            <Link to="/store">
              <span className="topnav-left" href="#store">
                Store
            </span>
            </Link>
            <img
              src="https://static1.squarespace.com/static/5b43afa4372b9648b4ee1100/t/5b43b33cf950b76063ec5618/1542162228867/?format=1500w"
              alt="cp"
            />
            <Link to="/cart">
              <span className="topnav-right" href="#cart">
                Cart
            </span>
            </Link>
            <Link to="/login">
              <span className="topnav-right" href="#login">
                Sign In
            </span>
            </Link>
          </nav>
          <Banner />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.session.currentUser,
  cart: state.cart.items
});

export default connect(mapStateToProps)(Navbar);