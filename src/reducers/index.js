import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import pets from './pets';
import auth from './auth';
import product from './product';

var rootReducer = combineReducers({
  pets,
  auth,
  product,
  routing: routerReducer
});

export default rootReducer;