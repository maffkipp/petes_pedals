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
              <NavLink exact to='/' className='navlink'>Home</NavLink>
              <NavLink to='/repair' className='navlink'>Repair & Restoration</NavLink>
              <NavLink to='/builds' className='navlink'>Builds</NavLink>
              <NavLink to='/mods' className='navlink'>Mods</NavLink>
              <NavLink to='/news' className='navlink'>News</NavLink>
              <NavLink to='/about' className='navlink'>About/Contact</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={(props) => <Home data={this.state.data} />} />
              <Route path='/repair' component={(props) => <Repair data={this.state.data} />}/>
              <Route path='/builds' component={(props) => <Builds data={this.state.data} />}/>
              <Route path='/mods' component={(props) => <Mods data={this.state.data} />}/>
              <Route path='/news' component={(props) => <News data={this.state.data} />}/>
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
