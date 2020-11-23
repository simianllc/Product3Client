import React, { Component } from 'react'
import ProductBox from "./Product.js"
export default class Inventory extends Component {
    render() {
        return (
            <div className="productBox">
                <h1>Inventory Component</h1>
                {this.props.products.map((product) => {
                    return (
                        <div >
                            <ProductBox product={ product } key={ product._id } deleteProduct={ this.props.deleteProduct } showProduct={ this.props.showProduct } />
                            
                        </div>
                    );
                })}
            </div>
        )
    }
}
