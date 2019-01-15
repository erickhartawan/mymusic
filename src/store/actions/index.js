import {FETCH_DATA, FETCH_RESULT,ADD_FAVOURITE} from "./types"
import axios from 'axios';
import firebase from "../../config/firebaseconfig"

const fetchData = (data) =>{
  return {
    type: FETCH_DATA,
    data
  }
}

const fetchResult = (data) =>{
  return {
    type: FETCH_RESULT,
    data
  }
}

const addFavourite = (data) =>{
  return {
    type: ADD_FAVOURITE,
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
      dispatch(fetchResult(res.data.message.body))
      console.log(res)
    })
    .catch(err => {
      throw(err)
    });
  }
}

// export const sendToFirestore = (track_name) => {
//   return (dispatch,{ getFirestore }) => {
//     const firestoredb = getFirestore();
//     firestoredb.collection('favourites').add({
//       track_name,
//       "Singer": "Slim Shady",
//       "Added on": new Date()
//     }).then(() => {
//       dispatch(addFavourite(track_name));
//       console.log(this.state)
//       }
//     ).catch(err => console.log(err))
//   }
// }

export const sendToFirestore = (track_name) => {
  return (dispatch, getState ,{getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('favourite').add({
      track_name,
      "Singer": "Slim Shady",
      "Added on": new Date()
    }).then(() => {
      dispatch(addFavourite(track_name));
    }
    ).catch(err => console.log(err))
  }
} 