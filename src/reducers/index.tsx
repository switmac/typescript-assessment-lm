import { AppEvents } from "../events";
import { IAction } from "../actions";
import { IAppState } from "../store";

const initialPersonState = {
  name: "",
  age: 0,
};

export const reducer = (
  state: any = initialPersonState,
  action: IAction
): IAppState => {
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
};
