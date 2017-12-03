import React, { Component } from 'react';
import '../css/Post.css';
import moment from 'moment';

import Gallery from './Gallery.js';

class Post extends Component {
  render() {
    return(
      <article className='post'>
        <h3 className='post-title'>{this.props.data.fields.title}</h3>
        <p className='post-date'>{moment(this.props.data.fields.date).format('MMMM Do, YYYY')}</p>
        <Gallery
          headPhoto={this.props.data.fields.headPhoto.fields.file.url}
          additionalPhotos={this.props.data.fields.additionalPhotos}
        />
        <p className='post-body'>{this.props.data.fields.body}</p>
      </article>
    )
  }
}

export default Post;
