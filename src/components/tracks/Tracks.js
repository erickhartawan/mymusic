import React, { Component } from 'react';
// import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';
import Search from './Search';
import {store} from '../../App.js'

class Tracks extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    const state = store.getState();
    // const { track_list, heading } = state;
    // if (track_list === undefined || track_list.length === 0) {
      return (
        <Spinner />
      );
    // } else {
    //   return (
    //     <React.Fragment>
    //       <Search />
    //       <h1 className='text-center mb-4'>
    //         {heading}
    //       </h1>
    //       <div className='row'>
    //         {
    //           track_list.map(items => (
    //             <Track key={items.track.track_id} track={items.track} />
    //           )
    //           )
    //         }
    //       </div>
    //     </React.Fragment>
    //   );
    // }
  }
}

export default Tracks
