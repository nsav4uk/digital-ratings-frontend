import { combineReducers } from "redux";
import { appReducer } from './app/reducers';
import { userReducer } from "./user/reducers";
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  routing: routerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
