import React from 'react'
import CartItem from './CartItem.js'

class CartItems extends React.Component {

    render () {
        const {cartItemsList} = this.props
        const itemsMapped = cartItemsList.map(item => <CartItem item={item}/> )

        return (
            <div className="container">
                <h1>Cart Items</h1>
                <ul className="list-group">
                    {itemsMapped}          
                </ul>
            </div>
        )
    }
}

export default CartItems