import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from '../../../assets/pushpin_1f4cc.png';
import './Marker.css';

const Marker = props => {
  return (
    <div className="marker">
      <h1 data-tip={props.restaurant.name}>
        <img src={Icon} alt="Map marker" height="32" />
      </h1>
      <ReactTooltip
        globalEventOff="click"
        className="marker__tooltip"
      />
    </div>
  );
};

export default Marker;
