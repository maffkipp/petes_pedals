import React, { Component } from "react";
import "../css/Repair.css";

import ProductList from "./ProductList.js";

// container for all repaired or restored pedals data
class Repair extends Component {
  render() {
    return (
      <div className="repair">
        <h1>Restorations</h1>
        <ProductList data={this.props.data} type="repairsAndRestorations" />
      </div>
    );
  }
}

export default Repair;
