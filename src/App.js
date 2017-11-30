import React, { Component } from 'react';
import './App.css';
import {
  HashRouter,
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

import NotFound from './components/NotFound.js';

// Top level component, contains navbar and primary router
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      toggledMenuClass: 'app-invisible'
    }
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

  toggleMenu() {
    if (this.state.toggledMenuClass === 'app-invisible') {
      this.setState({
        toggledMenuClass: 'app-menu-showing'
      })
    } else {
      this.setState({
        toggledMenuClass: 'app-invisible'
      });
    }
  }

  render() {
    return (
      <div className="app">
        <HashRouter>
          <div>
            <nav>
              <NavLink className='app-navlink app-homelink' exact to='/'>
                <img className='app-logo' src={require('./images/logo.jpg')} alt='logo' />
                <h2 className='app-title-link'>Pete's Pedals</h2>
              </NavLink>
              <button onClick={this.toggleMenu} className='app-icon-button'>
                <span className='app-menu-icon fa fa-bars fa-2x'></span>
              </button>
              <NavLink to='/repair' className={`app-navlink ${this.state.toggledMenuClass}`}>Repairs & Restorations</NavLink>
              <NavLink to='/builds' className={`app-navlink ${this.state.toggledMenuClass}`}>Custom Pedals</NavLink>
              <NavLink to='/mods' className={`app-navlink ${this.state.toggledMenuClass}`}>Mods</NavLink>
              <NavLink to='/news' className={`app-navlink ${this.state.toggledMenuClass}`}>News</NavLink>
              <NavLink to='/about' className={`app-navlink ${this.state.toggledMenuClass}`}>About</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={(props) => <Home data={this.state.data} />} />
              <Route exact path='/repair' component={(props) => <Repair data={this.state.data} />}/>
              <Route exact path='/builds' component={(props) => <Builds data={this.state.data} />}/>
              <Route exact path='/mods' component={(props) => <Mods data={this.state.data} />}/>
              <Route path='/news' component={(props) => <News data={this.state.data} />}/>
              <Route path='/about' component={About}/>

              <Route path='/builds/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />
              <Route path='/mods/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />
              <Route path='/repair/:id' component={(props) => <ProductFull propData={{...props}} data={this.state.data} />} />

              <Route path='/*' component={NotFound}/>

            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
