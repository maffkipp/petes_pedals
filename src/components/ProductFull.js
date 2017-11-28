import React, { Component } from 'react';
import '../css/ProductFull.css';

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
      gallery: null
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
          reverbLink: result.fields.reverbLink
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
        />)
  }

  render() {
    return (
      <div className='product-full'>
        <h1 className='product-full-title' >{this.state.title}</h1>
        <div className='product-full-container'>
          {this.generateGallery()}
          <p className='product-full-body' >{this.state.body}</p>
          {this.addReverbLink(this.state.reverbLink)}
        </div>
      </div>
    )
  }
}

export default ProductFull;
