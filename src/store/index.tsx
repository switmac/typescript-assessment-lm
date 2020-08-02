import { createStore, combineReducers } from "redux";
import { reducer as AppReducer } from "../reducers";

export interface IPersonState {
  name: string;
  age: number;
}

export interface IAppState {
  readonly app: IPersonState;
}

const reducers = combineReducers({
  app: AppReducer,
});

export const store = createStore(reducers);
