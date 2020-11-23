
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/ListGroup';

export default class ProductCart extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>CART RENDERS</h1>
                    <div className="subtotal">
                        <p>Subtotal (# of items): $0.00</p>
                    </div>
                    <Button className="checkout-btn">Checkout Emazon Cart</Button>
                    <hr className="item_hr"/>
                    <Row>
                    {/* <div id="products-in-cart"> */}
                       <Col > <img src="https://media.gq-magazine.co.uk/photos/5dbc4d5a8da8f900083b9076/master/w_1000,c_limit/20191028-watch-guide-baume.jpg" width="110px" className="cart-product-img" alt=""/>
                       </Col>
                        {/* <div className="cart-product-details"> */}
                            <Col>
                                <ListGroup className="product-cart-info">
                                    <ListGroup.Item className="product_name">Baume 10601</ListGroup.Item>
                                    <ListGroup.Item className="product_price">$99.99</ListGroup.Item>
                                    <ListGroup.Item className="product_in_stock">In Stock</ListGroup.Item>
                                    <ListGroup.Item className="product_style">Style:</ListGroup.Item>
                                    <ListGroup.Item className="product_color">Color:</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        {/* </div> */}
                        {/* <div className="items-in-cart"><p>aasd</p></div> */}
                    {/* </div> */}
                </Row>
                <div className="items-in-cart">
                    <div className="cart-update">
                        <form action="" id="cart-qty">
                            <Container>
                                <Row>
                                    <Button class="decrease-qty-btn">Delete or Subtract Item</Button> {/* On Amazon this button changes to a minus sign if qty > 1 */}
                                    <InputGroup id="quantity" name="quantity" type="text" className="qty-in-cart"></InputGroup>
                                    <Button className="increase-qty-btn">Add Item</Button>

                                        <Button variant="secondary" className="delete-item-btn">Delete</Button>
                                        <Button variant="secondary" className="save-item-btn">Save for Later</Button>
                                </Row>
                            </Container>
                        </form>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}




////////////////////////OLD CODE////////////////////////
// import React, { Component } from 'react'

// export default class ProductCart extends Component {
//     render() {
//         return (
//             <div>
//             <h1>CART RENDERS</h1>
//                 <div className="subtotal">
//                     <p>Subtotal (# of items): $0.00</p>
//                 </div>
//                 <button className="checkout-btn">Checkout Emazon Cart</button>
//                 <hr />
//                 <div id="products-in-cart">
//                     <img src="https://media.gq-magazine.co.uk/photos/5dbc4d5a8da8f900083b9076/master/w_1000,c_limit/20191028-watch-guide-baume.jpg" width="110px" className="cart-product-img" alt=""/>
//                     <div className="cart-product-details">
//                         <ul>
//                             <li className="product-name">Product Name</li>
//                             <li className="product-price">$99.99</li>
//                             <li className="product-in-stock">In Stock </li> {/* Boolean */}
//                             <li className="product-style">Style: </li> {/* Included Style and Color because it was on Amazon, but can me whatever need*/}
//                             <li className="product-color">Color: </li>
//                         </ul>
//                     </div>
//                     <div className="items-in-cart"></div>
//                 </div>
//                 <div className="items-in-cart">
//                     <div className="cart-update">
//                         <form action="" id="cart-qty">
//                             <button class="decrease-qty-btn">Delete or Subtract Item</button> {/* On Amazon this button changes to a minus sign if qty > 1 */}
//                             <input id="quantity" name="quantity" type="text" className="qty-in-cart"/>
//                             <button className="increase-qty-btn">Add Item</button>
//                             <button className="delete-item-btn">Delete</button>
//                             <button className="save-item-btn">Save for Later</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
