import React, { Component } from "react";
import "../css/Builds.css";

import ProductList from "./ProductList.js";

// container for all custom pedal builds data
class Builds extends Component {
  render() {
    return (
      <div className="builds">
        <h1>Custom Pedals</h1>
        <ProductList data={this.props.data} type="customPedals" />
      </div>
    );
  }
}

export default Builds;
