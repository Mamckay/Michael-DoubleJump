import React from 'react';
import './storenav.css';

export default class StoreNav extends React.Component {

    createCart = ()=> {
        return <button onClick={e=> {
            e.preventDefault();
            console.log('he');
        }} >Checkout</button>
    }
    render(){
    return (<div className='store-nav'>
        <span>Search Store</span>
        <ul>
            <li>Shooter</li>
            <li>Fantasy</li>
            <li>Sci-Fi</li>
            <li>Action Adventure</li>
            <li>Racing</li>
            <li>Sports</li>
        </ul>
  </div>)
    }
}