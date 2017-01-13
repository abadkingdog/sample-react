/**
 * ## Authorization
 * TODO: make sessions
 */

import * as types from '../constants/auth'
import Api from '../libs/api';
import AppAuthToken from '../libs/appAuthToken';

/**
 * ## Login actions
 */
function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true
  };
}

function loginSuccess(token) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: token,
    isFetching: false
  };
}

function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
    isFetching: false
  };
}

/**
 * ## Login actions
 */
function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true
  };
}

function logoutSuccess(res) {
  return {
    type: types.LOGOUT_SUCCESS,
    payload: res,
    isFetching: false
  };
}

function logoutFailure(error) {
  return {
    type: types.LOGOUT_FAILURE,
    payload: error,
    isFetching: false
  };
}

/**
 * ## SessionToken actions
 */
function sessionTokenRequest() {
  return {
    type: types.SESSION_TOKEN_REQUEST
  };
}
function sessionTokenRequestSuccess(token) {
  return {
    type: types.SESSION_TOKEN_SUCCESS,
    payload: token
  };
}
function sessionTokenRequestFailure(error) {
  return {
    type: types.SESSION_TOKEN_FAILURE,
    payload: typeof error === "undefined" ? null : error
  };
}

/**
 * ## DeleteToken actions
 */
function deleteTokenRequest() {
  return {
    type: types.DELETE_TOKEN_REQUEST
  };
}
function deleteTokenRequestSuccess() {
  return {
    type: types.DELETE_TOKEN_SUCCESS
  };
}

/**
 * ## Delete session token
 *
 */
export function deleteSessionToken() {
  return dispatch => {
    dispatch(deleteTokenRequest());
    return new  AppAuthToken().deleteSessionToken()
      .then(() => {
        dispatch(deleteTokenRequestSuccess());
      });
  };
}
/**
 * ## Token
 * If AppAuthToken has the sessionToken, the user is logged in
 * so set the state to logout.
 */
export function getSessionToken(dispatch) {
  return dispatch => {
    dispatch(sessionTokenRequest());
    return new AppAuthToken().getSessionToken()
      .then((token) => {
        if (token) {
          dispatch(sessionTokenRequestSuccess(token));
        } else {
          dispatch(sessionTokenRequestFailure());
        }
      })
      .catch((error) => {
        dispatch(sessionTokenRequestFailure(error));
      });
  };
}
/**
 * ## saveSessionToken
 * @param {Object} response - to return to keep the promise chain
 * @param {Object} json - object with sessionToken
*/
export function saveSessionToken(json) {
  return new AppAuthToken().storeSessionToken(json);
}

export function login(params,  dispatch) {
  return dispatch => {
    dispatch(loginRequest())
      return Api.login(params.username, params.password)
        .then((json) => {
          var token = '02d140331b766367d148e5f8f55bd41d'; //json.api_token;
          // saveSessionToken(token)
          dispatch(loginSuccess(token));
        })
        .catch((err) => {
          dispatch(loginFailure(err));
        })
  };
}

export function logout() {
return dispatch => {
    dispatch(logoutRequest())
      return Api.logout()
        .then((json) => {
          // deleteSessionToken();
          dispatch(logoutSuccess(json));
        })
        .catch((err) => {
          dispatch(logoutFailure(err));
        })
  };
}