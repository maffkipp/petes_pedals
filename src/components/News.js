import React, { Component } from 'react';
import '../css/News.css';

import Post from './Post.js';


// Body of the News tab; displays a list of most recent news posts
class News extends Component {
  constructor(props) {
    super(props);
    this.createPosts = this.createPosts.bind(this);
  }

  createPosts(results) {
    let sortedData = this.sortByDate(results);
    // Format data as Post components
    let postArray = sortedData.map(result => {
      if (result.sys.contentType.sys.id === 'news') {
        return(
          <Post key={result.sys.id} data={result} />
        )
      }
    });
    return postArray;
  }

  sortByDate(array) {
    array.sort((a, b) => {
      let date1 = new Date(a.sys.createdAt);
      let date2 = new Date(b.sys.createdAt);
      return date2 - date1;
    });
    return array;
  }

  render() {
    return(
      <div className='news'>
        <h1>Repair Blog</h1>
        {this.createPosts(this.props.data)}
      </div>
    )
  }
}

export default News;
