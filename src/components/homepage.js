import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./navbar";
import Login from "./login";
import MainStore from "./mainstore";
import Profile from "./profile";
import MainPage from "./mainpage";
import Register from "./register";
import Cart from "./cart";
import Order from "./order";
import Review from "./review";
import Complete from "./complete";
import "./css/homepage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/store" component={MainStore} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/review/:id" component={Review} />
              <Route exact path="/complete" component={Complete} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
