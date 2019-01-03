import dataReducer from "./dataReducer"
import resultReducer from "./resultReducer"
import favReducer from "./favReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"

export const rootReducer = combineReducers({
  data: dataReducer,
  result: resultReducer,
  favourite: favReducer,
  firebase: firestoreReducer,
});