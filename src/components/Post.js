import React, { Component } from 'react';
import '../css/Post.css';
import moment from 'moment';
import marked from 'marked';

import Gallery from './Gallery.js';

class Post extends Component {
  constructor(props) {
    super(props);
    this.convertMarkdownToHtml = this.convertMarkdownToHtml.bind(this);
  }

  // converts and sanitizes markdown from contentful
  convertMarkdownToHtml(markdown) {
    let html = marked(markdown, { sanitize: true });
    return html;
  }

  render() {
    return(
      <article className='post'>
        <h3 className='post-title'>{this.props.data.fields.title}</h3>
        <p className='post-date'>{moment(this.props.data.fields.date).format('MMMM Do, YYYY')}</p>
        <Gallery
          headPhoto={this.props.data.fields.headPhoto.fields.file.url}
          additionalPhotos={this.props.data.fields.additionalPhotos}
        />
        <div className='post-body'
             dangerouslySetInnerHTML={
              {__html: this.convertMarkdownToHtml(
                this.props.data.fields.body
              )}}
        />
      </article>
    )
  }
}

export default Post;
