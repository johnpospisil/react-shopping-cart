import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <nav className="navbar bg-light">
          <p>
            This shopping cart demonstration site made by{" "}
            <a href="http://www.johnpospisil.com">John Pospisil</a> on{" "}
            <a href="https://github.com/johnpospisil/react-shopping-cart">
              GitHub
            </a>{" "}
            using: <a href="https://reactjs.org/">React</a>.
          </p>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;
