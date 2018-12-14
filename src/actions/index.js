import {FETCH_DATA} from "./types"
import axios from 'axios';

const fetchData = (data) =>{
  return {
    type: FETCH_DATA,
    data
  }
}

export const fetchAPIData = () =>{
  return (dispatch) =>{
    return axios.get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=au&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res =>{
      dispatch(fetchData(res.data.message.body))
    })
    .catch(err => {
      throw(err)
    });
  }
}
export const fetchSearchData = (title) =>{
  return (dispatch) =>{
    return axios.get(`https://infinite-lowlands-58555.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res =>{
      dispatch(fetchData(res.data.message.body))
    })
    .catch(err => {
      throw(err)
    });
  }
}