import React, { Component } from 'react'
import Tracks from '../tracks/Tracks.js';
import Home from "../Home"
import {store} from '../../index'

class Index extends Component {
  render() {
    const state = store.getState();
    console.log(state);
    return (
      <React.Fragment>
          <Home />
      </React.Fragment>
    )
  }
}

export default Index;