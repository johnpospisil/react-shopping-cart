import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light">
          <p>
            This shopping cart demonstration site made by{" "}
            <Link to="http://www.johnpospisil.com">John Pospisil</Link> on{" "}
            <Link to="https://github.com/johnpospisil/react-shopping-cart">
              Github
            </Link>{" "}
            using <Link to="https://reactjs.org/">React</Link>.
          </p>
        </nav>
      </div>
    );
  }
}
