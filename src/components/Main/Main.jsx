import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import customStyles from './style.js';
import Marker from './Marker/Marker.jsx';

const key = process.env.REACT_APP_GOOGLE_API_KEY;

class Main extends Component {
  state = {
    isHovered: '',
    isClicked: ''
  };

  static defaultProps = {
    center: {
      lat: 37.8044,
      lng: -122.2712
    },
    zoom: 13
  };

  renderMarkers = () => {
    return this.props.restaurants.map((r, idx) => (
      <Marker
        key={idx}
        id={r.id}
        restaurant={r}
        lat={r.coordinates.latitude}
        lng={r.coordinates.longitude}
        isHovered={this.state.isHovered}
        isClicked={this.state.isClicked}
      />
    ));
  };

  onChildMouseEnter = key => {
    this.setState({ isHovered: this.props.restaurants[key].id });
    console.log(this.state.isHovered);
  };

  onChildMouseLeave = key => {
    this.setState({ isHovered: null });
  };

  onChildClick = key => {
    this.setState({ isClicked: this.props.restaurants[key] });
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
            onChildMouseLeave={this.onChildMouseLeave}
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
