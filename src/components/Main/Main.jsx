import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from '../../assets/iconfinder_map-marker_299087.png';
import customStyles from './style.js';
const Marker = () => <img src={MarkerIcon} />;

const key = process.env.REACT_APP_GOOGLE_API_KEY;

class Main extends Component {
  static defaultProps = {
    center: {
      lat: 37.8044,
      lng: -122.2712
    },
    zoom: 11
  };

  render() {
    console.log(this.props.restaurants);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ styles: [...customStyles] }}>
          <Marker
            lat={37.9044}
            lng={-122.2712}
            text="My Marker"
          />
          <Marker
            lat={37.8094}
            lng={-122.2712}
            text="My Marker"
          />
          <Marker
            lat={37.8044}
            lng={-122.2712}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Main;
