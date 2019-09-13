import React from 'react';
import MarkerIcon from '../../../assets/iconfinder_map-marker_299087.png';

const K_SIZE = 30;

const noHoverStyle = {
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

const hoveredStyle = {
  ...noHoverStyle,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

const Marker = () => {
  // const style = this.props.hover ? hoveredStyle : noHoverStyle;
  return (
    <div>
      <img src={MarkerIcon} />
    </div>
  );
};

export default Marker;
