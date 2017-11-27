import React, { Component } from 'react';
import '../css/Builds.css';
import {
  Link
} from 'react-router-dom';

import Product from './Product.js';

class Builds extends Component {

  createProducts(results) {
    // Format product data as Product components
    let productsArray = results.map(result => {
      if (result.sys.contentType.sys.id === 'product') {
        return (
          <Link to={`/builds/${result.sys.id}`}>
            <Product key={result.sys.id} data={result} />
          </Link>
        )
      }
    });
    return productsArray;
  }

  render() {
    return(
      <div className='builds'>
        <h1>Builds Component...</h1>
        {this.createProducts(this.props.data)}
      </div>
    )
  }
}

export default Builds;
