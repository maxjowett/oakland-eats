import React from 'react';
import MarkerIcon from '../../../assets/iconfinder_map-marker_299087.png';
import './Marker.css';

const K_SIZE = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

const Marker = props => {
  const style =
    props.isHovered !== props.id
      ? greatPlaceStyle
      : greatPlaceStyleHover;
  return (
    <div
      className="hint hint--html hint--info hint--top"
      style={style}>
      <div>{props.restaurant.id}</div>
      <div style={{ width: 80 }} className="hint__content">
        Сlick me
      </div>
    </div>
  );
};

export default Marker;
