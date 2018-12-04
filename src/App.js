import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
//import {  Provider  } from './context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createStore } from 'redux';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
// reducers taken for this is used from app-7
const reducer = (state,action) =>{
  if (action.type == "INJECT_STATE"){
    return {state: action.state}
  }

}
export const store = createStore(reducer);

class App extends Component {
    state = {
      track_list:[],
    };
  
  componentDidMount(){
  axios.get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=au&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then( res => {
            // console.log(res.data)
            // this.setState({track_list: res.data.message.body.track_list });
            store.dispatch({
              type:"INJECT_STATE",
              state: res.data.message.body.track_list,
            });
            })
        .catch( err =>  console.log(err))
  }
  render() {
    return (
      <Provider store ={store}>
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
      </Provider>
      
    );
  }
}

export default App;
