import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
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

// Top level component, contains navbar and promary router
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
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

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <nav>
              <NavLink exact to='/'>
                <img className='app-logo' src={require('./images/logo.jpg')} alt='logo' />
              </NavLink>
              <NavLink to='/repair' className='app-navlink'>Repairs & Restorations</NavLink>
              <NavLink to='/builds' className='app-navlink'>Custom Pedals</NavLink>
              <NavLink to='/mods' className='app-navlink'>Mods</NavLink>
              <NavLink to='/news' className='app-navlink'>News</NavLink>
              <NavLink to='/about' className='app-navlink'>About/Contact</NavLink>
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
        </Router>
      </div>
    );
  }
}

export default App;
