import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
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
