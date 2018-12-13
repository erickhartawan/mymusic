import React, { Component } from 'react';
// import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import {TrackList} from '../tracks/Track';
import Search from './Search';
import { store } from '../../index';
import { connect } from 'react-redux';

class Tracks extends Component {
  state={};
  render() {
    if (this.state.length === 1){
    this.setState(store.getState());
    } else {
    // if (state.length == 1) {
    //   return (
    //     <Spinner />
    //   );
    // } else {
      const { heading } = this.state;
      return (
        <React.Fragment>
          {/* <Search /> */}
          <h1 className='text-center mb-4'>
            {heading}
          </h1>
          <div className='row'>
          <TrackList
          track={this.state}
            />
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Tracks
