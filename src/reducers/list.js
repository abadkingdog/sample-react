import * as types from '../constants/ActionTypes';

var initialState = {
  items: [],
  isFetching: false,
  error: null
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_GET_LIST:
      var newstate = Object.assign({}, state, {
          items: action.items,
          isFetching: action.isFetching
        });
      return newstate;
    case types.FAILURE_GET_LIST:
      return Object.assign({}, state, {
          error: action.error,
          isFetching: action.isFetching
        });
    case types.REQUEST_GET_LIST:
      return Object.assign({}, state, {
          isFetching: action.isFetching
        });
    default:
      return state;
  }
}