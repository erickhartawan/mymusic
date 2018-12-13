import React, { Component } from 'react';
// import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import {TrackList} from '../tracks/Track';
import Search from './Search';
import { store } from '../../index';
import { connect } from 'react-redux';

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
          <div className='row'>
          <TrackList
            />
          </div>
        </React.Fragment>
      );
    }
  }
export default Tracks
