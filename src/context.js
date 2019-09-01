import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

//Provider - provides the info for all our application
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = () => {
    console.log("hello from 'add to cart'");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer - uses the data that the Provider provides
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
