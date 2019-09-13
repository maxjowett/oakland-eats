import React from 'react';
import MarkerIcon from '../../../assets/iconfinder_map-marker_299087.png';
import './Marker.css';

const Marker = props => {
  return (
    <p
      className={
        props.isClicked.id !== props.id ? 'nah' : 'hovered'
      }>
      Marker
    </p>
  );
};

export default Marker;
