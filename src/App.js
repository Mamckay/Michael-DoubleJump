import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import HomePage from './components/homepage';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}><HomePage /></Provider>
    );
  }
}

export default App;
