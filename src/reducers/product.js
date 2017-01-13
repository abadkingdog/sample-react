import * as types from '../constants/product';

var initialState = {
  data: {},
  isFetching: false,
  error: null
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_GET_PRODUCT:
      var newstate = Object.assign({}, state, {
          data: action.data,
          isFetching: action.isFetching
        });
      return newstate;
    case types.FAILURE_GET_PRODUCT:
      return Object.assign({}, state, {
          error: action.error,
          isFetching: action.isFetching
        });
    case types.REQUEST_GET_PRODUCT:
      return Object.assign({}, state, {
          isFetching: action.isFetching
        });
    default:
      return state;
  }
}