import createHistory from 'history/createBrowserHistory';
import reducers from '../core/reducers';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import logger from 'redux-logger'

const history   = createHistory();
const middlewares = [
  routerMiddleware(history),
  logger
];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}
console.log('reducers is', reducers);
export default createStore(combineReducers({
  ...reducers,
  routing:routerReducer,
}),
  composeEnhancers(applyMiddleware(...middlewares))
);
export { history }
