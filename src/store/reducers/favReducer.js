import { FETCH_DATA, FETCH_RESULT, ADD_FAVOURITE } from "../actions/types";

const initialState={
  "favourite":[
    {
      "title": "Lucky you",
    },
    {
      "title": "FACK,"
    }
  ]
}
export default function favReducer(state=initialState, action) {
  if (action.type === ADD_FAVOURITE) {
    const newTrackName = {
      title: action.data
    };
    const newFavourite = state.favourite.concat(newTrackName)

    return {
      ...state,
      favourite: newFavourite,
    }
  }
  else {
    return state;
  }
}