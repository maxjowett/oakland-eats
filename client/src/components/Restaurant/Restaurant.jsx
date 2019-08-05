import React, { Component } from 'react';

class Restaurant extends Component {

  render(props) {
    console.log(this.props)
    return (
    <div>
      <h1>Spotlight</h1>
      {
        this.props.spotlight && <h2>Got data!</h2>
      }
    </div>
    );
  }
}

export default Restaurant;