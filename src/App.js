import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import restaurants from './data.js';
import Side from './components/Side/Side.jsx';
import Main from './components/Main/Main.jsx';

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
  }
};

//toast.configure({
//position: 'bottom-right',
//autoClose: false
//});

class App extends Component {
  notify = () =>
    toast(
      '⚠️ If you are having trouble clicking the pins, try clicking the top of the pin!'
    );

  state = {
    data: restaurants,
    restaurants: null
  };

  componentDidMount() {
    this.callYelp();
    this.notify();
  }

  callYelp = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?t=fentons&location=oakland`,
        config
      )
      .then(response => {
        if (response.status === 200) {
          const { businesses } = response.data;
          this.setState({ restaurants: businesses });
        }
      });
  };

  render() {
    return (
      <div className="App">
        <Side restaurants={this.state.restaurants} />
        <Main restaurants={this.state.restaurants} />
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          className="toast"
          toastClassName="toast__body"
        />
      </div>
    );
  }
}

export default App;
