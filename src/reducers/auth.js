import * as types from '../constants/auth'

const initialState = {
  _error: undefined
}

export default function loginForm(state = initialState, action) {

  switch(action.type) {

    case types.LOGIN_SUCCESS:
      return { ...state, _error: undefined}

    case types.LOGIN_FAILURE:
      return { ...state, _error: action.payload.message}

    default:
      return state
  }

}