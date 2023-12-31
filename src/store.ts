import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { counterReducer } from "./Counter/counterReducer";
import { todoActions, todoReducer } from "./Todolist/todoReducer";
import { IsDarkAction, LoadingAction, appPropReducer } from "./tools/appPropReducer";
import { LoginAction, loginReducer } from "./tools/Login/loginReducer";
 export const serverPatch = "https://backend.asfalter.com.ua";
//export const serverPatch = "http://localhost:4444";
export const initialState = {
  user: {
    email: "",
    password: "",
    loggedIn: false,
    userEmail: "",
  },

  counter: {
    count: 0,
    min: "",
    max: "",
    buttonStatus: false,
    counterState: true,
  },
  todolists: [],
  sqlConnect: {},
  appProp: {
    isLoading: false,
    dark: false
  },
};

export type UserStateType = {
  email: string;
  password: string;
  loggedIn: boolean;
  userEmail: string;
};

export type CounterStateType = {
  count: any;
  min: any;
  max: any;
  buttonStatus: boolean;
  counterState: boolean;
};

export type TodoState = [];

export type IsLoadingState = {
  isLoading: boolean;
};
export type isDarkState = {
  dark: boolean;
};

export type appPropStateType = {
  isLoading: boolean,
  dark:boolean
}



export type RootAction = todoActions | LoadingAction | LoginAction | IsDarkAction;


export const rootReducer = combineReducers({
  counter: counterReducer,
  todolists: todoReducer,
  appProp: appPropReducer,
  user: loginReducer,

});

export type StoreType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

//если надо что то запускать при изменениии стора
store.subscribe(() => {
  const prevState = store.getState()
});

export type thunkType = ThunkDispatch<StoreType, any, RootAction>;
