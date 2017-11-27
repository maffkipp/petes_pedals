import React, { Component } from 'react';
import '../css/Repair.css';

import ProductList from './ProductList.js';

class Repair extends Component {
  render() {
    return(
      <div className='repair'>
        <h1>Repair Component...</h1>
        <ProductList data={this.props.data} type='repairsAndRestorations' />
      </div>
    )
  }
}

export default Repair;
