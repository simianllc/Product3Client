import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import NewForm from "./components/NewForm.js";
import Header from "./components/Header.js";
import ShoppingPage from "./components/ShoppingPage.js";
import "./index.css";
import ProductGrid from "./components/ProductGrid.js";
import ProductCart from "./components/ProductCart.js";
import Inventory from "./components/Inventory.js";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

console.log("App");
const baseURL = "http://localhost:3003";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.toggleinStock = this.toggleinStock.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleAddProduct(product) {
    this.setState({
      products: this.state.products.concat(product),
    });
  }

  getProducts() {
    fetch(baseURL + "/products")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          products: parsedData,
        });
      });
  }

  // trying out a show method //
  showProduct(id) {
    fetch(baseURL + "/products/" + id, {
      method: "PUT",
    }).then((response) => {
      const copyProducts = [...this.state.products];
      const findIndex = this.state.products.findIndex(
        (product) => product._id === id
      );
      this.setState({
        product: copyProducts[findIndex],
      });
    });
  }

  toggleinStock(product) {
    fetch(baseURL + "/products/" + product._id, {
      method: "PUT",
      body: JSON.stringify({ inStock: !product.inStock }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        const copyProducts = [...this.state.products];
        const findIndex = this.state.products.findIndex(
          (product) => product._id === resJson._id
        );
        copyProducts[findIndex].inStock = resJson.inStock;
        this.setState({ products: copyProducts });
      });
  }

  deleteProduct(id) {
    fetch(baseURL + "/products/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.products.findIndex(
        (product) => product._id === id
      );
      const copyProducts = [...this.state.products];
      copyProducts.splice(findIndex, 1);
      this.setState({ products: copyProducts });
    });
  }

  // //FIX EDIT ROUTE
  // editProduct(id) {
  //   fetch(baseURL + "/products/" + id + "/edit", {
  //     method: "PUT",
  //   }).then((response) => {
  //     const findIndex = this.state.products.findIndex(
  //       (product) => product._id === id
  //     );
  //     const copyProducts = [...this.state.products];
  //     // copyProducts.splice(findIndex, 1);
  //     this.setState({ products: copyProducts });
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route
              path="/new"
              component={() => (
                <NewForm handleAddProduct={this.handleAddProduct} />
              )}
            />
            <Route
              path="/inventory"
              component={() => (
                <Inventory
                  products={this.state.products}
                  deleteProduct={this.deleteProduct}
                />
              )}
            />
            <Route path="/shop" component={ShoppingPage} />
            <Route path="/product" component={ProductGrid} />
            <Route path="/cart" component={ProductCart} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
