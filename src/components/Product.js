import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1>Product Component</h1> */}
        <ul key={this.props.product._id}>
          <li> Product: {this.props.product.name}</li>
          <li> Price: ${this.props.product.price}</li>
          <li>Image Link: {this.props.product.image}</li>
          <li>Category: {this.props.product.category}</li>
          <li>Subcategory: {this.props.product.subcategory}</li>
          <li>Brand: {this.props.product.brand} </li>
          <li> Description: {this.props.product.description}</li>
          <li>Quantity: {this.props.product.quantity}</li>
          <li>Tags: {this.props.product.tags}</li>
          <button onClick={() => this.editProduct(this.props.product._id)}>EDIT</button>
          <button onClick={() => this.props.deleteProduct(this.props.product._id)}>DELETE</button>
        </ul>
        <div>
          <img src="{this.props.product.image}" width="300" alt="" onClick={() => this.showProduct(this.props.product._id)} />
        </div>
      </div>
    );
  }
}

// comments
