import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import {reducer} from "./App.js"
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';

const initialState = {
  track_list: [{title: 'hahahah'}],
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
  );


  const WrappedApp = () =>(
    <Provider store={store}>
    <App />
    </Provider>
  )
ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
