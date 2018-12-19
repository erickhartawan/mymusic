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
        "track_id": "",
        "album_name": "",
        "artist_name": "",
        "track_name": "",
      }
    }
  ],
  "track_result": [
    {
      "track": {
        "track_id": "",
        "album_name": "",
        "artist_name": "",
        "track_name": "",
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
