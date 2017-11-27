import React, { Component } from 'react';
import '../css/Mods.css';

import ProductList from './ProductList.js';

class Mods extends Component {
  render() {
    return(
      <div className='mods'>
        <h1>Mods Component...</h1>
        <ProductList data={this.props.data} type='moddedPedals' />
      </div>
    )
  }
}

export default Mods;
