import { FETCH_DATA, FETCH_RESULT, ADD_FAVOURITE } from "../actions/types";

const initialState =
{
  "heading":"Top 10 musics from MusixMatch",
  "track_list": [
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
export default function dataReducer(state=initialState, action) {
  if (action.type === FETCH_DATA) {
    return {
      ...state,
      track_list: action.data.track_list,
    };
  }
  else {
    return state;
  }
}