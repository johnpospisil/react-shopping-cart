import React, { Component } from "react";

const ProductContext = React.createContext();

//Provider - provides the info for all our application
class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer - uses the data that the Provider provides
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
