import React from 'react'


class CartItem extends React.Component {
    render() {
        let {item} = this.props
        console.log(item.productpriceInCents)
        return (
            <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">{item.product.name}</div>
                        <div className="col-md-2">Price: {`$ ${Math.ceil(parseInt(item.product.priceInCents) ) / 100}`}</div>
                        <div className="col-md-2">Quantity: {item.quantity} </div>
                    </div>
                    </div>
        )
    }
}

export default CartItem