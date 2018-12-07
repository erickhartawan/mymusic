import React, { Component } from 'react'
import Tracks from '../tracks/Tracks.js';
import {store} from '../../index'

class Index extends Component {
  render() {
    const state = store.getState();
    console.log(state);
    return (
      <React.Fragment>
          <Tracks />
      </React.Fragment>
    )
  }
}

export default Index;