import React, { Component } from 'react';
import '../css/ProductFull.css';

class ProductFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headPhoto: '',
      additionalPhotos: [],
      title: '',
      description: '',
      inStock: true,
      reverbLink: ''
    }
    this.getDataFromId = this.getDataFromId.bind(this);
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
          description: result.fields.description,
          inStock: result.fields.inStock,
          reverbLink: result.fields.reverbLink
        });
      }
    });
  }

  populateAdditionalImages(photos) {
    if (photos) {
      let photoArray = photos.map(photo => {
        return <img
            key={photo.sys.id}
            className='full-page-photo full-page-add-photo'
            src={photo.fields.file.url}
            alt='#'
          />
      });
      return photoArray;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img className='full-page-photo full-page-head-photo' src={this.state.headPhoto} alt='#' />
        <div className='full-page-photo-container'>
          {this.populateAdditionalImages(this.state.additionalPhotos)}
        </div>
        <p>{this.state.description}</p>
        <p>{this.state.inStock}</p>
        <a href={this.state.reverbLink}>Reverb</a>
      </div>
    )
  }
}

export default ProductFull;
