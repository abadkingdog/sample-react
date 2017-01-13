import * as types from '../constants/auth'

const initialState = {
  isAuthorized: false,
  error: undefined,
  isFetching: false
}

export default function loginForm(state = initialState, action) {

  switch(action.type) {

    case types.LOGIN_REQUEST:
      return { ...state, error: undefined, isFetching: action.isFetching}

    case types.LOGIN_SUCCESS:
      return { ...state, error: undefined, isAuthorized: true, isFetching: action.isFetching}

    case types.LOGIN_FAILURE:
      return { ...state, error: action.payload.message, isFetching: action.isFetching}

    case types.LOGOUT_REQUEST:
      return { ...state, error: undefined, isFetching: action.isFetching}

    case types.LOGOUT_SUCCESS:
      return { ...state, error: undefined, isAuthorized: false, isFetching: action.isFetching}

    case types.LOGOUT_FAILURE:
      return { ...state, error: action.payload, isFetching: action.isFetching}

    default:
      return state
  }

}