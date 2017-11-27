import React, { Component } from 'react';

import '../css/Product.css';

class Product extends Component {
  render() {
    return(
      <article>
        <img src={this.props.data.fields.headPhoto.fields.file.url} alt='#' />
        <h3>{this.props.data.fields.title}</h3>
        <p>{this.props.data.fields.description}</p>
      </article>
    )
  }
}

export default Product;
