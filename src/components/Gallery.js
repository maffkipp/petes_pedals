import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.populateLightboxImages = this.populateLightboxImages.bind(this);
    this.gotoNextLightboxImage = this.gotoNextLightboxImage.bind(this);
    this.gotoPrevLightboxImage = this.gotoPrevLightboxImage.bind(this);
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

  populateLightboxImages(photos) {
    if (photos) {
      let photoArray = photos.map(photo => {
        return {src: photo.fields.file.url}
      });
      photoArray.unshift({src: this.props.headPhoto});
      return photoArray;
    } else return [{src: this.props.headPhoto}];
  }

  openLightbox() {
    this.setState({
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
      currentImage: 0
    });
  }

  gotoNextLightboxImage() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoPrevLightboxImage() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  render() {
    const imageArray = this.populateLightboxImages(this.props.additionalPhotos);
    return (
      <div>
        <a onClick={this.openLightbox}>
          <img src={this.props.headPhoto} />
          {this.populateAdditionalImages(this.props.additionalPhotos)}
        </a>
        <Lightbox
          currentImage={this.state.currentImage}
          images={imageArray}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickNext={this.gotoNextLightboxImage}
          onClickPrev={this.gotoPrevLightboxImage}
        />
      </div>
    )
  }
}

export default Gallery;
