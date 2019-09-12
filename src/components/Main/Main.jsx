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
    zoom: 13
  };

  renderMarkers = () => {
    console.log(this.props.restaurants);
    return this.props.restaurants.map((r, idx) => (
      <Marker
        key={idx}
        lat={r.coordinates.latitude}
        lng={r.coordinates.longitude}
        hover={() => console.log('Yay!')}
      />
    ));
  };

  onChildMouseEnter = key => {
    console.log('Something is hovered!');
    console.log(this.props.restaurants[key]);
  };

  onChildClick = e => {
    console.log('Clicked!');
    console.log(e);
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
