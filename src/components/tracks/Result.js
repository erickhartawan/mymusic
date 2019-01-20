import React from 'react';
import { store } from '../../index';
import Spinner from "../layout/Spinner";
import {TrackList} from '../tracks/Track';

class Result extends React.Component {
  state ={
    track_result:"",
  }

  componentDidUpdate(prevProps){
    if(this.props.track_result.track_result !== prevProps.track_result.track_result){
      this.forceUpdate();
      this.setState({track_result: this.props.track_result.track_result})
    }
  }
  render(){
    const track_result = this.state.track_result
    console.log(track_result)
    if(!!track_result.length === false){
      return <Spinner />
    } else if (!!track_result.length !== false){
      const type = "result_list";
      return <TrackList type={type}/>
    }
  }



}
export default Result;