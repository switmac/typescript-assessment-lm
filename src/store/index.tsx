import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

const reducers = combineReducers({
  app: AppReducer,
});
