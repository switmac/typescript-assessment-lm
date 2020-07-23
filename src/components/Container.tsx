import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { nameByRace } from "fantasy-name-generator";
import { App as MainComponent } from "./App";
import { SetName, SetAge, IAction } from "../actions";
import { IAppState } from "../store";

const mapStateToProps = (state: IAppState) => {
  return {
    name: state.app.name,
    age: state.app.age,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onClick: (): void => {
      let randomName: string = nameByRace("human").toString();
      dispatch(SetAge(Math.floor(Math.random() * 100)));
      dispatch(SetName(randomName));
    },
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(
  MainComponent
);
