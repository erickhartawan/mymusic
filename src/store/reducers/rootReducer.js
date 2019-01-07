import trackListReducer from "./trackListReducer"
import trackResultReducer from "./trackResultReducer"
import favReducer from "./favReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"

export const rootReducer = combineReducers({
  track_list: trackListReducer,
  track_result: trackResultReducer,
  favourite: favReducer,
  firestore: firestoreReducer,
});