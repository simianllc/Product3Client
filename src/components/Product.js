import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        <ul key={this.props.product._id}>
          <li>
            <h3 key="">Product: {this.props.product.name}</h3>
          </li>
          <li>Price: ${this.props.product.price} </li>
          <br />
          <li>Image Link: {this.props.product.image}</li>
          <br />
          <li>Category: {this.props.product.category}</li>
          <br />
          <li>Subcategory: {this.props.product.subcategory}</li>
          <br />
          <li>Brand: {this.props.product.brand} </li>
          <br />
          <li> Description: {this.props.product.description}</li>
          <br />
          <li>Quantity: {this.props.product.quantity} </li>
          <br />
          <li>Tags: {this.props.product.tags}</li>
          <br />
          <button onClick={() => this.editProduct(this.props.product._id)}>
            EDIT
          </button>
          <button
            onClick={() => this.props.deleteProduct(this.props.product._id)}
          >
            DELETE
          </button>
        </ul>
        <div>
          <img
            src={this.props.product.image}
            width="300"
            alt=""
            onClick={() => this.showProduct(this.props.product._id)}
          ></img>
        </div>
      </div>
    );
  }
}

// comments
