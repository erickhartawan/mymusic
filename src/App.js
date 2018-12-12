import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import { store } from './index'
// reducers taken for this is used from app-7

export function reducer(state,action){
  if (action.type === "INJECT_STATE"){
    return {...state,track_list: action.payload}
  } else {
    return state;
  }
}
=======
// reducers taken for this is used from app-7

>>>>>>> redux-rewrite


class App extends Component {
    state = {
      track_list:[],
    };
  
  componentWillMount(){
  axios.get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=au&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then( res => {
            // console.log(res.data);
            // this.setState({track_list: res.data.message.body.track_list });
            const result = res.data.message.body.track_list;
            this.setState({track_list : result})
            // console.log(this.state)
            store.dispatch({
              type:"INJECT_STATE",
              payload: this.state.track_list,
              });
            console.log(store.getState());
            })
        .catch( err =>  console.log(err))
  }
  render() {
    return (
<<<<<<< HEAD
      <Provider store ={store}>
=======
>>>>>>> redux-rewrite
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