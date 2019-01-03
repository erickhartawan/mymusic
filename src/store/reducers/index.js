import {FETCH_DATA,FETCH_RESULT, ADD_FAVOURITE} from "../actions/types";

export function reducer(state,action){
  if (action.type === FETCH_DATA){
    return {
      ...state,
      track_list: action.data.track_list,
    };
  } else if (action.type === FETCH_RESULT){
    return {
      ...state,
      track_result: action.data.track_list,
    };
  }
  else if (action.type === ADD_FAVOURITE){
    const newTrackName = {
      title: action.data
    };
    const newFavourite = state.favourite.concat(newTrackName)

    return{
      ...state,
      favourite: newFavourite,
    }
    // state.favourite.concat(newTrackName)
    // return state;
    
  }
    else {
    return state;
  }
}


// switch (action.type) {
//   case 'ADD_MESSAGE': {
//     const newMessage = {
//       text: action.text,
//       timestamp: Date.now(),
//       id: uuid.v4(),
//     };
//     return state.concat(newMessage);