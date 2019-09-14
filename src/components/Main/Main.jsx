import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactModal from 'react-modal';
import customStyles from './style.js';
import Marker from './Marker/Marker.jsx';
import Modal from './Modal/Modal.jsx';
import './Modal/Modal.css';
const key = process.env.REACT_APP_GOOGLE_API_KEY;

class Main extends Component {
  state = {
    isHovered: '',
    isClicked: '',
    isModalOpen: false
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
  };

  onChildMouseLeave = key => {
    this.setState({ isHovered: null });
  };

  onChildClick = key => {
    this.setState({ isClicked: this.props.restaurants[key] });
    this.handleOpenModal();
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <ReactModal
          className="modal"
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}>
          <Modal isClicked={this.state.isClicked} />
        </ReactModal>
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
