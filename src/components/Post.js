import React, { Component } from 'react';
import '../css/Post.css';

class Post extends Component {
  render() {
    return(
      <article className='post'>
        <img src={this.props.data.fields.headPhoto.fields.file.url} alt='#' />
        <h3>{this.props.data.fields.title}</h3>
        <p>{this.props.data.fields.body}</p>
      </article>
    )
  }
}

export default Post;
