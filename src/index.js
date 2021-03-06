import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect} from 'react-redux';
import { fetchAPIData } from './store/actions/index';
import { rootReducer } from './store/reducers/rootReducer';
import firebase from "./config/firebaseconfig";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase,getFirebase } from "react-redux-firebase";

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
  "favourite":[
    {
      "title": "Lucky you",
    },
    {
      "title": "FACK,"
    }
    
  ],
};
// const enhancers = [
//   reduxFirestore(firebase)
// ]

export const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase),
  )
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
