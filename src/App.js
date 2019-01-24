import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import CartFooter from './components/CartFooter.js'
import CartItems from './components/CartItems.js'



class App extends Component {

  render() {
    let cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    return (
     <body>
       <Header />
       <CartItems cartItemsList={cartItemsList} />
      <CartFooter copyright="2016" />
      
     </body>
    )
  }
}

export default App;
