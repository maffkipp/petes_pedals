import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import client from './contentfulClient.js';

import Home from './components/Home.js';
import Repair from './components/Repair.js';
import Builds from './components/Builds.js';
import Mods from './components/Mods.js';
import News from './components/News.js';
import About from './components/About.js';

import ProductFull from './components/ProductFull.js';

import ScrollToTop from './components/ScrollToTop.js'
import NotFound from './components/NotFound.js';

// Top level component, contains navbar and primary router
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      toggledMenuClass: 'app-invisible'
    }
    this.menuOpen = this.menuOpen.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    // Get all data from contentful
    client.getEntries()
    .then(entries => {
      let tempArr = [];
      entries.items.forEach(entry => {
        if (entry.fields.title) {
          tempArr.push(entry);
        }
      });
      this.setState({
        data: tempArr
      });
    });
  }

  menuOpen() {
    // opens mobile menu
    this.setState({
      toggledMenuClass: 'app-menu-showing'
    });
  }

  menuClose() {
    // closes mobile menu
    this.setState({
      toggledMenuClass: 'app-invisible'
    });
  }

  toggleMenu() {
    // decides wether button opens or closes menu
    (this.state.toggledMenuClass === 'app-invisible') ? this.menuOpen() : this.menuClose();
  }

  render() {
    return (
      <div className="app">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollToTop>
            <nav>
              <NavLink className='app-navlink app-homelink' exact to='/'>
                <img className='app-logo' src={require('./images/logo.jpg')} alt='logo' />
                <h2 className='app-title-link'>Pete's Pedals</h2>
              </NavLink>
              <button onClick={this.toggleMenu} className='app-icon-button'>
                <span className='app-menu-icon fa fa-bars fa-2x'></span>
              </button>
              <NavLink to='/restorations' onClick={this.menuClose} className={`app-navlink ${this.state.toggledMenuClass}`}>Restorations</NavLink>
              <NavLink to='/builds' onClick={this.menuClose} className={`app-navlink ${this.state.toggledMenuClass}`}>Custom Pedals</NavLink>
              <NavLink to='/mods' onClick={this.menuClose} className={`app-navlink ${this.state.toggledMenuClass}`}>Mods</NavLink>
              <NavLink to='/blog' onClick={this.menuClose} className={`app-navlink ${this.state.toggledMenuClass}`}>Repair Blog</NavLink>
              <NavLink to='/about' onClick={this.menuClose} className={`app-navlink ${this.state.toggledMenuClass}`}>About</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={(props) => <Home data={this.state.data} />} />
              <Route exact path='/restorations' component={(props) => <Repair data={this.state.data} />}/>
              <Route exact path='/builds' component={(props) => <Builds data={this.state.data} />}/>
              <Route exact path='/mods' component={(props) => <Mods data={this.state.data} />}/>
              <Route path='/blog' component={(props) => <News data={this.state.data} />}/>
              <Route path='/about' component={About}/>

              <Route path='/builds/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />
              <Route path='/mods/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />
              <Route path='/restorations/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />
              <Route path='/*' component={NotFound}/>
            </Switch>
          </ScrollToTop>
        </Router>
        <footer className='app-footer'>
          <a className='app-sm-link app-sm-link-fb' href='https://www.facebook.com/Petes-Pedals-St-Louis-1539987856307597/'>
            <span className='fa fa-facebook-official fa-2x app-sm-icon'></span>
          </a>
          <a className='app-sm-link app-sm-link-yt' href='https://www.youtube.com/channel/UCqOxjewQAU3xmGT9zNVdrDA'>
            <span className='fa fa-youtube-square fa-2x app-sm-icon'></span>
          </a>
          <p className='app-signature'>
            <a className='app-name-link' href='https://www.wesmk.com/'>
              created 2017 by Wesley Maffly-Kipp.
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
