import React, { Component } from 'react';

import '../css/Product.css';
import imageQuality from '../imageHandling';

// single product in ProductList component
class Product extends Component {

  shortenText(text) {
    // limits text length to 249 characters
    if (text.length > 250) {
      return text.substring(0, 250) + '...';
    } else return text;
  }

  render() {
    return(
      <div className='product'>
        <img
          className='product-image'
          src={imageQuality(this.props.data.fields.headPhoto.fields.file.url, 10)}
          alt={this.props.data.fields.title}
        />
        <div className='product-text-container'>
          <h3 className='product-title'>{this.props.data.fields.title}</h3>
          <p className='product-body'>{this.shortenText(this.props.data.fields.body)}</p>
        </div>
      </div>
    )
  }
}

export default Product;
