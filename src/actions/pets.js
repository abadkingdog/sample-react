import * as types from '../constants/pets';
import Api from '../libs/api.js';

function requestGetList(data) {
  return {
    type: types.REQUEST_GET_LIST,
    isFetching: true
  };
}

function successGetList(data) {
  return {
    type: types.SUCCESS_GET_LIST,
    items: data,
    isFetching: false
  };
}

function failureGetList(error) {
  return {
    type: types.FAILURE_GET_LIST,
    error: error,
    isFetching: false
  };
}

export function getPetsByStatus(status, dispatcher) {
  return (dispatch) => {
    dispatch(requestGetList());
    Api.getPetsByStatus(status)
      .then((response) => {
        dispatch(successGetList(response));
      }).catch((err) => {
        dispatch(failureGetList(err));
      });
  }
}
