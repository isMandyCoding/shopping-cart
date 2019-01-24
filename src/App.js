import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import CartFooter from './components/CartFooter.js'
import CartItems from './components/CartItems.js'


class App extends Component {
  render() {
    return (
     <body>
       <Header />
       <CartItems />
      <CartFooter copyright="2016" />
      
     </body>
    )
  }
}

export default App;
