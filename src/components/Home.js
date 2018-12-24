import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import "./Home.css"

class Home extends Component {
  render() {
    
    return (
      <>
        <h1 className='text-center title'>Welcome to MusixMach Lyric Hub</h1>
        <p className='text-center'>Project created by Erick with Redux and MusixMach API </p>
        <div className="d-flex flex-row align-items-center justify-content-around">
          <div>
            <Link to={`/search`}>
              <Button color="primary">
                Search Kukukoikoi
              </Button>
            </Link>
            </div>
            <div>
            <Link to={`/tracks`}>
            <Button color="primary">
                Top 10 Tracks
              </Button>
            </Link>
            </div>
          </div>
      </>
    )
  }
}

export default Home