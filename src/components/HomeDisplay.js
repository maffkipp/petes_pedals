import React, { Component } from "react";
import "../css/HomeDisplay.css";
import { Link } from "react-router-dom";

import imageQuality from '../imageHandling';

// Displays 'most recent' links on home screen
class HomeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.name,
      image: "",
      subtitle: "",
      id: ""
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.type);
  }

  getData(type) {
    // pulls in first set of data for a specific type
    let firstData = this.props.data.find(result => {
      return result.sys.contentType.sys.id === type;
    });
    if (firstData) {
      this.setState({
        image: imageQuality(firstData.fields.headPhoto.fields.file.url, 20),
        subtitle: firstData.fields.title,
        id: firstData.sys.id
      });
    }
  }

  render() {
    return (
      <div className={`home-display ${this.props.color}`}>
        <Link to={`/${this.props.url}`} className="home-display-link">
          <div className={`${this.props.color}`}>
            <h2 className="home-display-title">{this.state.title}</h2>
          </div>
        </Link>
        <Link
          to={`/${this.props.url}/${this.state.id}`}
          className="home-display-link"
        >
          <div className={`${this.props.color}`}>
            <img
              className="home-display-image"
              src={this.state.image}
              alt={this.state.title}
            />
            <h3 className="home-display-subtitle">{this.state.subtitle}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default HomeDisplay;
