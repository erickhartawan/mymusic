import {FETCH_DATA,FETCH_RESULT} from "../actions/types";

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
    else {
    return state;
  }
}