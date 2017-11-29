import React, { Component } from 'react';
import '../css/Home.css';

import HomeDisplay from './HomeDisplay.js';

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <h1>Home</h1>
        <div className='home-container home-container-first'>
          <HomeDisplay url='repair' color='red' name='Repairs & Restorations' data={this.props.data} type='repairsAndRestorations'/>
          <HomeDisplay url='builds' color='white' name='Custom Pedals' data={this.props.data} type='customPedals'/>
        </div>
        <div className='home-container home-container-second'>
          <HomeDisplay url='mods' color='white' name='Modded Pedals' data={this.props.data} type='moddedPedals'/>
          <HomeDisplay url='news' color='red' name='News' data={this.props.data} type='news'/>
        </div>
      </div>
    )
  }
}

export default Home;
