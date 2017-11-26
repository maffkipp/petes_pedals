import React, { Component } from 'react';

class Post extends Component {
  render() {
    return(
      <article>
        <img src={this.props.data.fields.featuredImage.fields.file.url} alt='#' />
        <h3>{this.props.data.fields.title}</h3>
        <p>{this.props.data.fields.description}</p>
      </article>
    )
  }
}

export default Post;
