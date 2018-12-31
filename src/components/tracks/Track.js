import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { store } from '../../index';
import { sendToFirestore } from "../../actions"

const Track = (props) => (
    props.tracksEssence.map((tracks,index) => (
    <div 
    className='col-md-6'
    key={index}
    >
      <div className="card mb-4">
        <div className="card-body text-center">
          <h5>{tracks.artist_name}</h5>
          <p className="card-text text-center">
          <strong><i className="fas fa-play"></i> {tracks.track_name}</strong>
          <br/>
          <strong><i className="fas fa-compact-disc"></i> {tracks.album_name}</strong>
          <div
          onClick={() => props.onClick(tracks.track_name)}
          >💚</div>
          </p>
          <Link to={`/track/lyrics/${tracks.track_id}`} className="btn btn-outline-success btn-block">
          <i className="fas fa-chevron-right"></i><span className="text-white"> View Lyrics</span>
          </Link>
          
        </div>
      </div>
    </div>
    )
    )
)


const mapStateToTrackProps = (state) => {

  const tracksEssence = state.track_list.map(track => ( 
    {
      artist_name: track.track.artist_name,
      track_name: track.track.track_name,
      album_name: track.track.album_name,
      track_id: track.track.track_id,
    }
  ));

  return {
    tracksEssence,
  };
};

const mapDispatchTrackProps = (dispatch) => (
  {
    onClick: (track_name) => (
      store.dispatch(sendToFirestore(track_name))
    ),
  }
);

export const TrackList = connect(mapStateToTrackProps,mapDispatchTrackProps)(Track);