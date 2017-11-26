import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import Home from './components/Home.js';
import Repair from './components/Repair.js';
import Builds from './components/Builds.js';
import Mods from './components/Mods.js';
import News from './components/News.js';
import About from './components/About.js';
import NotFound from './components/NotFound.js';

// Top level component, contains navbar and promary router
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <NavLink exact to='/' className='navlink'>Home</NavLink>
              <NavLink to='/repair' className='navlink'>Repair & Restoration</NavLink>
              <NavLink to='/builds' className='navlink'>Builds</NavLink>
              <NavLink to='/mods' className='navlink'>Mods</NavLink>
              <NavLink to='/news' className='navlink'>News</NavLink>
              <NavLink to='/about' className='navlink'>About/Contact</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/repair' component={Repair}/>
              <Route path='/builds' component={Builds}/>
              <Route path='/mods' component={Mods}/>
              <Route path='/news' component={News}/>
              <Route path='/about' component={About}/>
              <Route path='/*' component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
