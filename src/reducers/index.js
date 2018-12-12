import {FETCH_DATA} from "../actions/types";

export function reducer(state,action){
  if (action.type === FETCH_DATA){
    return {
      ...state,
      track_list: action.data.track_list,
    };
  } else {
    return state;
  }
}