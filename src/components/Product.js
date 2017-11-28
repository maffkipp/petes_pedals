import React, { Component } from 'react';

import '../css/Product.css';

class Product extends Component {

  shortenText(text) {
    if (text.length > 250) {
      return text.substring(0, 250) + '...';
    } else return text;
  }

  render() {
    return(
      <div className='product'>
        <img
          className='product-image'
          src={this.props.data.fields.headPhoto.fields.file.url}
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
