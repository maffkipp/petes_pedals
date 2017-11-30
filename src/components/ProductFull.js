import React, { Component } from 'react';
import '../css/ProductFull.css';
import converter from '../showdown.js';

import Gallery from './Gallery.js';

class ProductFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headPhoto: '',
      additionalPhotos: [],
      title: '',
      body: '',
      reverbLink: '',
      youtubeEmbedLink: ''
    }
    this.getDataFromId = this.getDataFromId.bind(this);
    this.generateGallery = this.generateGallery.bind(this);
  }

  componentDidMount() {
    this.getDataFromId(this.props.data);
  }

  getDataFromId(results) {
    const pageId = this.props.propData.match.params.id;
    results.forEach(result => {
      if (result.sys.id === pageId) {
        this.setState({
          headPhoto: result.fields.headPhoto.fields.file.url,
          additionalPhotos: result.fields.additionalPhotos,
          title: result.fields.title,
          body: result.fields.body,
          reverbLink: result.fields.reverbLink,
          youtubeEmbedLink: result.fields.youtubeEmbedLink
        });
      }
    });
  }

  addReverbLink(link) {
    if (link) {
      return <a className='product-full-reverb' href={link}>Purchase on Reverb</a>
    }
  }

  generateGallery() {
    return (
      <Gallery
        headPhoto={this.state.headPhoto}
        additionalPhotos={this.state.additionalPhotos}
      />
    )
  }

  getYoutube(link) {
    if (link) {
      return (
        <iframe
          className='product-full-youtube'
          height="315"
          src={this.state.youtubeEmbedLink}
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowfullscreen>
        </iframe>
      )
    }
  }


  render() {
    return (
      <div className='product-full'>
        <div className='product-full-container'>
          <h1 className='product-full-title' >{this.state.title}</h1>
          {this.generateGallery()}
          {this.addReverbLink(this.state.reverbLink)}
          <p className='product-full-body' >{this.state.body}</p>
          {this.getYoutube(this.state.youtubeEmbedLink)}
        </div>
      </div>
    )
  }
}

export default ProductFull;
