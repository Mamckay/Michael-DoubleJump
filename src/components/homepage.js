import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import SideNav from './sidenav';
import ReviewList from './reviewlist';
import Login from './login';
import MainStore from './mainstore';
import Profile from './profile';
import MainPage from './mainpage';
import Register from './register';
import Cart from './cart';
import './homepage.css';

export default class HomePage extends React.Component{
    
    render(){
        return (<Router>
            <div>
            <SideNav></SideNav>
            <Sidebar></Sidebar>
            <main>
                <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/reviews" component={ReviewList} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/store" component={MainStore} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/cart" component={Cart}/>
                    </Switch>
                   
            </main>
            </div>
    </Router>)
    }
}