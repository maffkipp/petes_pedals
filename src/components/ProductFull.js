import React, { Component } from 'react';

class ProductFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headPhoto: '',
      additionalPhotos: '',
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
          headPhoto: result.fields.headPhoto,
          additionalPhotos: result.fields.additionalPhotos,
          title: result.fields.title,
          description: result.fields.description,
          inStock: result.fields.inStock,
          reverbLink: result.fields.reverbLink
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default ProductFull;
