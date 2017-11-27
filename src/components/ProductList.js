import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Product from './Product.js';

class ProductList extends Component {

    createProducts(results) {
    // Format product data as Product components
    let productsArray = results.map(result => {
      if (result.sys.contentType.sys.id === this.props.type) {
        return (
          <Link key={result.sys.id} to={`/builds/${result.sys.id}`}>
            <Product data={result} />
          </Link>
        )
      }
    });
    return productsArray;
  }

  render() {
    return (
      <div>
        {this.createProducts(this.props.data)}
      </div>
    )
  }
}

export default ProductList;
