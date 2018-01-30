import React, { Component } from "react";
import Lightbox from "react-images";
import "../css/Gallery.css";

// Responsive photo gallery for product pages and blog
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.populateLightboxImages = this.populateLightboxImages.bind(this);
    this.gotoNextLightboxImage = this.gotoNextLightboxImage.bind(this);
    this.gotoPrevLightboxImage = this.gotoPrevLightboxImage.bind(this);
  }

  populateAdditionalImages(photos) {
    // returns an array of additional images that link to lightbox
    if (photos) {
      let value = 0;
      let photoArray = photos.map(photo => {
        if (photo.fields) {
          value++;
          return (
            <a key={photo.sys.id} onClick={() => this.openLightbox(value)}>
              <img
                className="gallery-additional-photo gallery-hover"
                src={photo.fields.file.url}
                alt="#"
              />
            </a>
          );
        }
      });
      return photoArray;
    }
  }

  populateLightboxImages(photos) {
    // returns an array of objects for each image to send to Lightbox as source
    if (photos) {
      let photoArray = photos.map(photo => {
        if (photo.fields) {
          return { src: photo.fields.file.url };
        }
      });
      photoArray.unshift({ src: this.props.headPhoto });
      return photoArray;
    } else return [{ src: this.props.headPhoto }];
  }

  openLightbox(value) {
    this.setState({
      lightboxIsOpen: true,
      currentImage: value
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
      <div className="gallery">
        <a onClick={() => this.openLightbox(0)}>
          <img
            className="gallery-head-photo gallery-hover"
            src={this.props.headPhoto}
          />
        </a>
        <div className="gallery-additional-photo-container">
          {this.populateAdditionalImages(this.props.additionalPhotos)}
        </div>
        <Lightbox
          currentImage={this.state.currentImage}
          images={imageArray}
          isOpen={this.state.lightboxIsOpen}
          onClose={this.closeLightbox}
          onClickNext={this.gotoNextLightboxImage}
          onClickPrev={this.gotoPrevLightboxImage}
        />
      </div>
    );
  }
}

export default Gallery;
