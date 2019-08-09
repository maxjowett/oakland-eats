import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.804829,
      lng: -122.272476
    },
    zoom: 11
  };
  
  render(props) {
    console.log(this.props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            // text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;