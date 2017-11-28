import React, { Component } from 'react';
import '../css/News.css';

import Post from './Post.js';


// Body of the News tab; displays a list of most recent news posts
class News extends Component {

  createPosts(results) {
    // Format data as Post components
    let postArray = results.map(result => {
      if (result.sys.contentType.sys.id === 'news') {
        return(
          <Post key={result.sys.id} data={result} />
        )
      }
    });
    return postArray;
  }

  render() {
    return(
      <div className='news'>
        <h1>News</h1>
        {this.createPosts(this.props.data)}
      </div>
    )
  }
}

export default News;
