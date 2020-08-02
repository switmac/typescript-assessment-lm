import { AppEvents } from "../events";
import { IAction } from "../actions";

const initialPersonState = {
  name: "",
  age: 0,
};

export function reducer<T>(state: T, action: IAction) {
  switch (action.type) {
    case AppEvents.SET_NAME: {
      return { ...state, name: action.payload };
    }
    case AppEvents.SET_AGE: {
      return { ...state, age: action.payload };
    }
    default: {
      return { app: { ...initialPersonState } };
    }
  }
}
