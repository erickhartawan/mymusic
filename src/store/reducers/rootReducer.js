import trackListReducer from "./trackListReducer"
import trackResultReducer from "./trackResultReducer"
import favReducer from "./favReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
  auth:authReducer,
  track_list: trackListReducer,
  track_result: trackResultReducer,
  favourite: favReducer,
  firestore: firestoreReducer,
  firebase:firebaseReducer,
});