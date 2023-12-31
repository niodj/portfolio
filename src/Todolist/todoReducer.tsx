import { initialState } from "../store";
import { TodoType } from "./TodolistApp";

export type todoActions = { type: "RECEIVE_TODO"; payload: TodoType[] };

export const todoReducer = (
  state: TodoType[] = initialState.todolists,
  action: todoActions
): TodoType[] => {
  switch (action.type) {
    case "RECEIVE_TODO":
      return action.payload;
    default:
      return state;
  }
};
