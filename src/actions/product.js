import * as types from '../constants/product';
import Api from '../libs/api.js';

function requestGetProduct(data) {
  return {
    type: types.REQUEST_GET_PRODUCT,
    isFetching: true
  };
}

function successGetProduct(data) {
  return {
    type: types.SUCCESS_GET_PRODUCT,
    data: data,
    isFetching: false
  };
}

function failureGetProduct(error) {
  return {
    type: types.FAILURE_GET_PRODUCT,
    error: error,
    isFetching: false
  };
}


export function getProductById(id, dispatcher) {
  return (dispatch) => {
    dispatch(requestGetProduct());
    Api.getPetById(id)
      .then((response) => {
        dispatch(successGetProduct(response));
      }).catch((err) => {
        dispatch(failureGetProduct(err));
      });
  }
}