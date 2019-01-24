import React, { Component } from 'react'

class AddItem extends Component {
    render () {
        const { products } = this.props
        
        return (
            <div className="container">
                <form className="align-center">
                <div class="form-group">
                    <label htmlFor="Quantity">Quantity:</label>
                     <input className="form-control" id="Quantity" type="number" name="quantity" />
                </div>

                <div class="form-group">
                    <label>
                    Product: 
                    <select className="form-control">
                    {products.map(product => {
                        return (
                            <option> {product.name} </option>
                        )
                    })}

                    </select>
                    </label>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>

            </div>
        )
    }
}

export default AddItem