import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
          {/* <div className="Banner"> */}
          <ListGroup horizontal className="list">
           
           <Link to="/" >
           <ListGroup.Item>Home</ListGroup.Item>
           </Link>
           <Link to="/shop">
           <ListGroup.Item>Shop</ListGroup.Item>
           </Link>
           <Link to="/new" handleAddProduct={this.handleAddProduct}>
           <ListGroup.Item>New Item</ListGroup.Item>
           </Link>
           <Link to="/inventory" products={ this.props.products } deleteProduct={ this.deleteProduct }>
           <ListGroup.Item>Inventory</ListGroup.Item>
           </Link>
           <Link to="/product">
           <ListGroup.Item>Show</ListGroup.Item>
           </Link>
           <Link to="/cart">
           <ListGroup.Item>Cart</ListGroup.Item>
           </Link>
         </ListGroup>
         
  
         <div className="carousel-container">
         <Carousel className="carousel">
         <Carousel.Item >
          <img
            className="img-responsive"
            src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
         </Carousel.Item>
          <Carousel.Item >
          <img
          className="img-responsive"
          src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Third slide"
          bsPrefix
          />
          <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="img-responsive"
          src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </Carousel.Item>
          </Carousel> 
  </div>
  
       
              <h1 >E-Mazon</h1>
             <br />
            <img ClassName="logo"  alt=""/>
            <i className="fa fa-shopping-cart"></i>
            <div className="navbar">
         
      
        
       </div>
          
          {/* </div> */}
  
          <div className="SearchBar">
            <form onSubmit={this.handleSubmit}>
              <input type="search" name="search" placeholder="Search.."></input>
              <input type="submit" value="Search" />
              <i type="submit" className="fa fa-search"></i>
            </form>
          </div>
         
        </div>    
    );
  }
}
