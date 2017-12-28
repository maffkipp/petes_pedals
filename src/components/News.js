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
    // make array of blog items only
    let newsArray = sortedData.filter(function(result) {
      return (result.sys.contentType.sys.id === 'news') ? true : false;
    });
    // format as post components
    let posts = newsArray.map(item => {
      return(
        <Post key={item.sys.id} data={item} />
      )
    });
    return posts;
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
