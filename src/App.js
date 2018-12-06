import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import { store } from './index'
// reducers taken for this is used from app-7

export function reducer(state,action){
  if (action.type === "INJECT_STATE"){
    return action.payload
  } else {
    return state;
  }
}


class App extends Component {
    state = {
      track_list:[],
    };
  render() {
    return (
      
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/track/lyrics/:id" component={Lyrics} />
            </Switch>
            </div> 
        </React.Fragment>
      </Router>
    );
  }
}

export default App;