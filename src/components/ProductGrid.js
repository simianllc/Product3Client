import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProductGrid extends Component {
    render() {
        return (
            <div className="container product-grid" >
                <h1>PRODUCT GRID RENDERS</h1>
                <div className="row">
                    {/* wrap this in a loop that produces additional div*/}
                    {this.props.products.map((product) => { // Map product to div w/ information below
                        return (
                            <div>
                                <img src={product.image} width="100px" alt='' />
                                <Link to={{pathname: '/product-details', state:{product: product}}}> {/* add Link to navigate to ProductDetails component and send the product that is clicked as the state. */}
                                    <button className="view-product-btn">View</button>{/* button positioned at higher z-index and positioned over image*/}
                                </Link>
                                <ul>
                                    <li>{product.brand}</li>
                                    <li>{product.name}</li>
                                    <li>{product.price}</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}







//////////////////////OLD CODE////////////////
// import React, { Component } from 'react'

// export default class ProductGrid extends Component {
//     render() {
//         return (
//             <div id="product-grid">
//             <h1>PRODUCT GRID RENDERS</h1>
//             {/* wrap this in some loop that produces additional div*/}
//             <img src="https://media.gq-magazine.co.uk/photos/5dbc4d5a8da8f900083b9076/master/w_1000,c_limit/20191028-watch-guide-baume.jpg" width="185px" alt='' />
//             <button className="view-product-btn">View</button>{/* button positioned at higher z-index and positioned over image*/}
//                <ul>
//                     <li>Product Brand</li>
//                     <li>Product Name</li>
//                     <li>Price</li>
//                </ul>
//             </div>
//         )
//     }
// }



