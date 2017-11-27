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
      <article>
        <img
          className='product-image'
          src={this.props.data.fields.headPhoto.fields.file.url}
          alt={this.props.data.fields.title}
        />
        <h3>{this.props.data.fields.title}</h3>
        <p>{this.shortenText(this.props.data.fields.body)}</p>
      </article>
    )
  }
}

export default Product;
