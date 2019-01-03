import { FETCH_DATA, FETCH_RESULT, ADD_FAVOURITE } from "../actions/types";

const initialState =
{
  "track_result": [
    {
      "track": {
        "track_id": "",
        "album_name": "",
        "artist_name": "",
        "track_name": "",
      }
    }
  ]
}

export default function resultReducer(state=initialState, action) {
  if (action.type === FETCH_RESULT) {
    return {
      ...state,
      track_result: action.data.track_list,
    };
  } else {
    return state;
  }
}