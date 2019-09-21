import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <div className="py-2">
        <section>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <React.Fragment>
                    <div className="py-4">
                      <Title name="your" title="cart" />
                      <CartColumns />
                      <CartList value={value} />
                      <CartTotals value={value} history={this.props.history} />
                    </div>
                  </React.Fragment>
                );
              } else {
                return <EmptyCart />;
              }
            }}
          </ProductConsumer>
        </section>
      </div>
    );
  }
}
