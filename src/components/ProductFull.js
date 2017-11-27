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
          inStock: result.fields.inStock,
          reverbLink: result.fields.reverbLink
        });
      }
    });
  }

  addReverbLink(link) {
    if (link) {
      return <a href={link}>Reverb</a>
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
      <div>
        <h1>{this.state.title}</h1>
        {this.generateGallery()}
        <p>{this.state.body}</p>
        <p>{this.state.inStock}</p>
        {this.addReverbLink(this.state.reverbLink)}
      </div>
    )
  }
}

export default ProductFull;
