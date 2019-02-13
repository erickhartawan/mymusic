import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import "./Home.css"

class Home extends Component {
  render() {
    
    return (
      <>
        <h1 className='text-center title'>Welcome to MusixMach Lyric Hub</h1>
        <p className='text-center subtitle'>Project created by Erick with Redux and MusixMach API </p>
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="flex-shrink-1">
            <Link to={`/search`}>
              <Button className="bigbutton" color="primary">
                Search Kukukoikoi
              </Button>
            </Link>
            </div>
            <div className="flex-shrink-1" >
            <Link to={`/tracks`}>
            <Button className="bigbutton"color="primary">
                Top 10 Tracks
              </Button>
            </Link>
            </div>
            <div className="flex-shrink-1" >
            <Link to={`/favourite`}>
            <Button className="bigbutton"color="primary">
                Favourite page
              </Button>
            </Link>
            </div>
          </div>
      </>
    )
  }
}

export default Home