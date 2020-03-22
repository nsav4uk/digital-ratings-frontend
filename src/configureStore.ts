import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './store';
import { routerMiddleware } from "react-router-redux";

export default function configureStore(preloadedState: any, history: any) {
  const historyMiddleware = routerMiddleware(history);
  const middlewares = [thunkMiddleware, historyMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
