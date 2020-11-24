
import React, { Component } from "react";


export default class ProductDetails extends Component {

    render() {
    const {product} = this.props.location.state; // Retrieve the product from the state. Reference: https://reactrouter.com/web/api/location
        return ( // Render product information.
            <div>
                <p>{product.description}</p>
                <p>{product.name}</p>
                <img src={product.image} alt=""/>
            </div>
        );
    }
}