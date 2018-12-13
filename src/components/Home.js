import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    
    return (
      <>
      <h1 className='text-center'>Welcome to MusixMach Lyric Hub</h1>
      <p>Project created by Erick with Redux and MusixMach API </p>
      <div className= "flex-container">
      <Link to={`/search`} className="button-left mx-auto my-auto">
      <span className="center label">Search For Lyrics</span>
      </Link>
      <Link to={`/tracks`} className="button-right mx-auto my-auto">
      <span className="center label">top 10 tracks</span>
      </Link>
      </div>
      </>
    )
  }
}

export default Home