import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';

import { fetchAPIData } from './actions/index';
import { reducer } from './reducers/index';


const initialState =
{
  "heading":"Top 10 musics from MusixMatch",
  "track_list": [
    {
      "track": {
        "track_id": 158988975,
        "track_mbid": "",
        "track_isrc": "",
        "track_spotify_id": "",
        "track_soundcloud_id": "",
        "track_xboxmusic_id": "",
        "track_name": "Shallow",
        "track_name_translation_list": [],
        "track_rating": 99,
        "track_length": 216,
        "commontrack_id": 88392716,
        "instrumental": 0,
        "explicit": 1,
        "has_lyrics": 1,
        "has_lyrics_crowd": 0,
        "has_subtitles": 1,
        "has_richsync": 1,
        "num_favourite": 781,
        "lyrics_id": 18355978,
        "subtitle_id": 22804934,
        "album_id": 30239370,
        "album_name": "A Star Is Born Soundtrack",
        "artist_id": 36879228,
        "artist_mbid": "",
        "artist_name": "Lady Gaga feat. Bradley Cooper",
        "album_coverart_100x100": "http:\/\/s.mxmcdn.net\/images-storage\/albums\/nocover.png",
        "album_coverart_350x350": "",
        "album_coverart_500x500": "",
        "album_coverart_800x800": "",
        "track_share_url": "https:\/\/www.musixmatch.com\/lyrics\/Lady-Gaga-feat-Bradley-Cooper\/Shallow?utm_source=application&utm_campaign=api&utm_medium=Kent+Institute%3A1409617993242",
        "track_edit_url": "https:\/\/www.musixmatch.com\/lyrics\/Lady-Gaga-feat-Bradley-Cooper\/Shallow\/edit?utm_source=application&utm_campaign=api&utm_medium=Kent+Institute%3A1409617993242",
        "commontrack_vanity_id": "Lady-Gaga-feat-Bradley-Cooper\/Shallow",
        "restricted": 0,
        "first_release_date": "2018-09-27T00:00:00Z",
        "updated_time": "2018-10-18T15:46:55Z",
        "primary_genres": {
          "music_genre_list": [
            {
              "music_genre": {
                "music_genre_id": 1042,
                "music_genre_parent_id": 6,
                "music_genre_name": "Traditional Country",
                "music_genre_name_extended": "Country \/ Traditional Country",
                "music_genre_vanity": "Country-Traditional-Country"
              }
            },
            {
              "music_genre": {
                "music_genre_id": 1065,
                "music_genre_parent_id": 10,
                "music_genre_name": "Folk-Rock",
                "music_genre_name_extended": "Singer\/Songwriter \/ Folk-Rock",
                "music_genre_vanity": "Singer-Songwriter-Folk-Rock"
              }
            },
            {
              "music_genre": {
                "music_genre_id": 1133,
                "music_genre_parent_id": 14,
                "music_genre_name": "Pop\/Rock",
                "music_genre_name_extended": "Pop \/ Pop\/Rock",
                "music_genre_vanity": "Pop-Pop-Rock"
              }
            }
          ]
        },
        "secondary_genres": {
          "music_genre_list": []
        }
      }
    }
  ],
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

store.dispatch(fetchAPIData());

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
