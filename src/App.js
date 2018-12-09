import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// reducers taken for this is used from app-7



class App extends Component {
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