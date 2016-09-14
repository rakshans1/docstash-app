// eslint-disable no-undef
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function(state =  initialState.authenticated, action) {
  switch(action.type) {
    case types.AUTH_USER_SUCCESS:
      return true;
      // return { ...state, error: '', authenticated: true };
    case types.UNAUTH_USER_SUCCESS:
      return false;
    default:
        return state;
  }
}
