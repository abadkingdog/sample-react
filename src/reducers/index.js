import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import list from './list';
import auth from './auth';

var rootReducer = combineReducers({
  list,
  auth,
  routing: routerReducer
});

export default rootReducer;