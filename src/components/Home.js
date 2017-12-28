import React, { Component } from 'react';
import '../css/Home.css';

import HomeDisplay from './HomeDisplay.js';

class Home extends Component {
  render() {
    return(
      <div className='home'>
        <div className='home-text-container'>
          <p className='home-header-text'>From my shop in St Louis to your pedal board.  Handmade
          custom pedals, meticulously researched mods and upgrades, pedal repair and restorations
          of vintage beauties.<br/><br/>I also make custom one-off pedals upon request.<br/><br/>
          If you have any questions, requests or challenges please contact me.</p>
          <a className='home-youtube' href='https://www.youtube.com/channel/UCqOxjewQAU3xmGT9zNVdrDA'>Find Me on Youtube</a>
        </div>
        <div className='home-container home-container-first'>
          <HomeDisplay url='restorations' color='red' name='Restorations' data={this.props.data} type='repairsAndRestorations'/>
          <HomeDisplay url='builds' color='white' name='Custom Pedals' data={this.props.data} type='customPedals'/>
        </div>
        <div className='home-container home-container-second'>
          <HomeDisplay url='mods' color='white' name='Modded Pedals' data={this.props.data} type='moddedPedals'/>
          <HomeDisplay url='blog' color='red' name='Repair Blog' data={this.props.data} type='news'/>
        </div>
      </div>
    )
  }
}

export default Home;
