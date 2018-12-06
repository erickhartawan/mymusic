import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Track = (props) => {
  // const { track } = props;
    {
      props.track.map((track,index) => (

    <div className='col-md-6'>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
          <strong><i className="fas fa-play"></i> {track.track_name}</strong>
          <br/>
          <strong><i className="fas fa-compact-disc"></i> {track.album_name}</strong>
          </p>
          <Link to={`/track/lyrics/${track.track_id}`} className="btn btn-dark btn-block">
          <i className="fas fa-chevron-right"></i><span className="text-white"> View Lyrics</span>
          </Link>
        </div>
      </div>
    </div>
      ))
  }
}

const mapStateToTabsProps = (state) => {
  const track = state.track.map(t => (
    {
      artist_name: t.artist_name,
      track_name: t.track_name,
      album_name: t.album_name,
      track_id: t.track_id,
    }
  ));

  return {
    track,
  };
};

// const mapDispatchToTabsProps = (dispatch) => (
//   {
//     onClick: (id) => (
//       dispatch({
//         type: 'OPEN_THREAD',
//         id: id,
//       })
//     ),
//   }
// );

export const TrackList = connect(
  mapStateToTabsProps,
  // mapDispatchToTabsProps
)(Track);