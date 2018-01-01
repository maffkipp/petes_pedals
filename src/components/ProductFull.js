import React, { Component } from 'react';
import '../css/ProductFull.css';
import marked from 'marked';

import Gallery from './Gallery.js';
import Paypal from './Paypal.js';

// full page view of a product. all data is stored in state
class ProductFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headPhoto: '',
      additionalPhotos: [],
      title: '',
      body: '',
      reverbLink: '',
      youtubeEmbedLink: '',
      paypalLink: ''
    }
    this.getDataFromId = this.getDataFromId.bind(this);
    this.generateGallery = this.generateGallery.bind(this);
    this.convertMarkdownToHtml = this.convertMarkdownToHtml.bind(this);
  }

  componentDidMount() {
    this.getDataFromId(this.props.data);
  }

  // takes the id from the url parameter and returns the corresponding
  // data from contentful
  getDataFromId(results) {
    const pageId = this.props.propData.match.params.id;
    results.forEach(result => {
      if (result.sys.id === pageId) {

        let bodyHtml = this.convertMarkdownToHtml(result.fields.body);

        this.setState({
          headPhoto: result.fields.headPhoto.fields.file.url,
          additionalPhotos: result.fields.additionalPhotos,
          title: result.fields.title,
          body: bodyHtml,
          reverbLink: result.fields.reverbLink,
          youtubeEmbedLink: result.fields.youtubeEmbedLink,
          paypalLink: result.fields.paypalNumber
        });
      }
    });
  }

  convertMarkdownToHtml(markdown) {
    let html = marked(markdown, { sanitize: true });
    return html;
  }

  // if a reverb link is included, adds it to page
  addReverbLink(link) {
    if (link) {
      return <a className='product-full-reverb' href={link}>Purchase on Reverb</a>
    }
  }

  // if a paypal link is included, add the component to page
  addPaypalLink(link) {
    if (link) {
      return <Paypal paypal={link} />
    }
  }

  // creates a photo gallery component
  generateGallery() {
    return (
      <Gallery
        headPhoto={this.state.headPhoto}
        additionalPhotos={this.state.additionalPhotos}
      />
    )
  }

  // if a youtube link is included, adds embed to page
  getYoutube(link) {
    if (link) {
      return (
        <iframe
          title={this.state.youtubeEmbedLink}
          className='product-full-youtube'
          height="315"
          src={this.state.youtubeEmbedLink}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen>
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
          <div className='product-full-body'
               dangerouslySetInnerHTML={{ __html: this.state.body}}
          />
          {this.addPaypalLink(this.state.paypalLink)}
          {this.getYoutube(this.state.youtubeEmbedLink)}
        </div>
      </div>
    )
  }
}

export default ProductFull;
