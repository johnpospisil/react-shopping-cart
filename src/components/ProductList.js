import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-4">
          <div className="container">
            <Title name="our" title="products" />
            {/* product row */}
            <div className="row">
              <ProductConsumer>
                {value => {
                  // console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        {/* <Product></Product> */}
      </React.Fragment>
    );
  }
}
