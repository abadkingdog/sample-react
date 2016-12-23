import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


export default function configureStore(initialState) {
  var logger = createLogger();
  var store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

  return store;
}