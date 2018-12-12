import React, { Component } from 'react';
// import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import {TrackList} from '../tracks/Track';
import Search from './Search';
import { store } from '../../index';
import { connect } from 'react-redux';

class Tracks extends Component {
<<<<<<< HEAD
  render() {
    return (
        <Consumer>
        { 
        value => {
          const { track_list, heading } = value ;

          if (track_list === undefined || track_list.length === 0){
            return (
              <Spinner />
            );
          } else {
            return (
              
              <React.Fragment>
                <Search />
              <h1 className='text-center mb-4'>
              {heading}
              </h1>
              <div className='row'>
              {track_list.map(items => (
                <Track key={items.track.track_id} track={items.track} />
                  
                  )
                )
              }
              </div>
              </React.Fragment>
            );
          }
        }
      }
        </Consumer>
    );
  }
}  
=======
  state={};

  // componentDidMount() {
  //   const statefromstore = store.getState();
  //   this.setState({statefromstore});
  // };
>>>>>>> redux-rewrite

  // componentDidUpdate(prevState) {
  //   if(this.state !== prevState.state){
  //   this.setState(this.state);
  //   }
  // };
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
            {/* {
              track_list.map(items => (
                <Track 
                // key={items.track.track_id}
                track={items.track} />
              )
              )
            } */}
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Tracks
