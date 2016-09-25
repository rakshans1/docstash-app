import axios from 'axios';
import * as types from '../constants/actionTypes';
import { ToastAndroid, AsyncStorage } from 'react-native';
import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';
import {userInfo} from './userActions';
import  ROOT_URL from '../baseurl';

export function authSucess(token) {
  return {
    type: types.AUTH_USER_SUCCESS,
    payload: token
  };
}

export function signinUser(email, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    axios.post(`${ROOT_URL}/signin`,{email, password})
      .then(response => {
        dispatch(authSucess(response.data.token));
        dispatch(userInfo(response.data.token));
      })
      .catch(response => {
        dispatch(ajaxCallError());
        ToastAndroid.show('Bad Login Info', ToastAndroid.LONG)
      });
  };
}
export function signupUser(name,  email, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    axios.post(`${ROOT_URL}/signup`,{name, email, password})
      .then(response => {
        dispatch(authSucess(response.data.token));
        dispatch(userInfo(response.data.token));
      })
      .catch(response =>  {
        dispatch(ajaxCallError());
        ToastAndroid.show(response.response.data.error, ToastAndroid.LONG)
      });
  };
}

export function signoutUser() {
  AsyncStorage.removeItem('Docstash');
  return { type: types.UNAUTH_USER_SUCCESS };
}
