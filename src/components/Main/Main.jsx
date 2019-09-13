import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import customStyles from './style.js';
import Marker from './Marker/Marker.jsx';

const key = process.env.REACT_APP_GOOGLE_API_KEY;

class Main extends Component {
  state = {
    isHovered: ''
  };

  static defaultProps = {
    center: {
      lat: 37.8044,
      lng: -122.2712
    },
    zoom: 13
  };

  renderMarkers = () => {
    console.log(this.props.restaurants);
    return this.props.restaurants.map((r, idx) => (
      <Marker
        key={idx}
        lat={r.coordinates.latitude}
        lng={r.coordinates.longitude}
      />
    ));
  };

  onChildMouseEnter = key => {
    console.log('Something is hovered!');
    console.log(this.props.restaurants[key]);
    this.setState({ isHovered: this.props.restaurants[key] });
  };

  onChildClick = key => {
    console.log('Clicked!');
    console.log(key);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        {this.props.restaurants && (
          <GoogleMapReact
            bootstrapURLKeys={{ key }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{ styles: [...customStyles] }}
            onChildMouseEnter={this.onChildMouseEnter}
            onChildClick={this.onChildClick}
            hoverSize={20}>
            {this.renderMarkers()}
          </GoogleMapReact>
        )}
      </div>
    );
  }
}

export default Main;
