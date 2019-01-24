import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import CartFooter from './components/CartFooter.js'


class App extends Component {
  render() {
    return (
     <body>
       <Header />
      <CartFooter />
     </body>
    )
  }
}

export default App;
