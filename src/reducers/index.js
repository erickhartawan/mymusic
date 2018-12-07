import {FETCH_DATA} from "../actions/types";

export function reducer(state,action){
  if (action.type === FETCH_DATA){
    return action.data
  } else {
    return state;
  }
}