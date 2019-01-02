import React, { Component } from 'react';
import {TrackList} from '../tracks/Track';
import { store } from '../../index';

class Tracks extends Component {
  state = store.getState();
  render() {
      const { heading } = this.state;
      console.log(this.state)
      return (
        <React.Fragment>
          {/* <Search /> */}
          <h1 className='text-center mb-4'>
            {heading}
          </h1>
          <div className='d-flex flex-wrap'>
          <TrackList
            />
          </div>
        </React.Fragment>
      );
    }
  }
export default Tracks
