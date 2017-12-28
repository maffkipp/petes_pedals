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
    // make array of all products that match type prop
    let productsArray = results.filter(result => {
      return (result.sys.contentType.sys.id === this.props.type) ? true : false;
    });
    // Format product data as Product components
    let posts = productsArray.map(product => {
      return (
        <Link className='product-list-link' key={product.sys.id} to={`/${type}/${product.sys.id}`}>
          <Product data={product} />
        </Link>
      )
    });
    return posts;
  }

  defineType() {
    // equates types with their contentful identifiers
    let type = this.props.type;
    if (type === 'moddedPedals') {
      return 'mods';
    } else if (type === 'customPedals') {
      return 'builds';
    } else if (type === 'repairsAndRestorations') {
      return 'restorations';
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
