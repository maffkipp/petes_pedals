import React, { Component } from 'react';
import client from '../contentfulClient.js';

import Post from './Post.js';


// Body of the News tab; displays a list of most recent news posts
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    // Get all data from contentful (move to App.js?)
    client.getEntries()
    .then(entries => {
      let tempArr = [];
      entries.items.forEach(entry => {
        if (entry.fields.title) {
          tempArr.push(entry);
        }
      });
      this.setState({
        postData: tempArr
      });
    });
  }

  createPosts(results) {
    // Format data as Post components
    let postArray = results.map(result => {
      return(
        <Post key={result.sys.id} data={result} />
      )
    });
    return postArray;
  }

  render() {
    return(
      <div className='News'>
        <h1>News Component...</h1>
        {this.createPosts(this.state.postData)}
      </div>
    )
  }
}

export default News;
