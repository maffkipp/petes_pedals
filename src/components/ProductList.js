import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../css/ProductList.css';

import Product from './Product.js';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.defineType = this.defineType.bind(this);
    this.createProducts = this.createProducts.bind(this);
  }

  createProducts(results, type) {
    // Format product data as Product components
    let productsArray = results.map(result => {
      if (result.sys.contentType.sys.id === this.props.type) {
        return (
          <Link key={result.sys.id} to={`/${type}/${result.sys.id}`}>
            <Product data={result} />
          </Link>
        )
      }
    });
    return productsArray;
  }

  defineType() {
    let type = this.props.type;
    if (type === 'moddedPedals') {
      return 'mods';
    } else if (type === 'customPedals') {
      return 'builds';
    } else if (type === 'repairsAndRestorations') {
      return 'repair';
    }
  }


  render() {
    let listType = this.defineType()
    return (
      <div className='product-list'>
        {this.createProducts(this.props.data, listType)}
      </div>
    )
  }
}

export default ProductList;
