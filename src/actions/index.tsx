import { AppEvents } from "../events";

export interface INameActionSet {
  type: typeof AppEvents.SET_NAME;
  payload: string;
}
export interface IAgeActionSet {
  type: typeof AppEvents.SET_AGE;
  payload: number;
}

export type IAction = INameActionSet | IAgeActionSet;

export function SetName(name: string): IAction {
  return {
    type: AppEvents.SET_NAME,
    payload: name,
  };
}

export function SetAge(age: number): IAction {
  return {
    type: AppEvents.SET_AGE,
    payload: age,
  };
}
