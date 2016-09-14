import axios from 'axios';
import * as types from '../constants/actionTypes';
import { Actions } from 'react-native-router-flux';
import { ToastAndroid, AsyncStorage } from 'react-native';
import {beginAjaxCall, ajaxCallError} from './ajaxstatusActions';
import {userInfo} from './userActions';
import  ROOT_URL from '../baseurl';

export function authSucess() {
  return {
    type: types.AUTH_USER_SUCCESS
  };
}

export function signinUser(email, password) {
  return dispatch => {
    dispatch(beginAjaxCall());
    axios.post(`${ROOT_URL}/signin`,{email, password})
      .then(response => {
        AsyncStorage.setItem('token', response.data.token);
        dispatch(authSucess());
        dispatch(userInfo(response.data.token));
        Actions.drawer({type: 'reset'})
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
        AsyncStorage.setItem('token', response.data.token);
        dispatch(authSucess());
        dispatch(userInfo(response.data.token));
        Actions.drawer({type: 'reset'})
      })
      .catch(response =>  {
        dispatch(ajaxCallError());
        ToastAndroid.show(response.response.data.error, ToastAndroid.LONG)
      });
  };
}


export function loginUserByToken( token ) {
  return dispatch => {
        dispatch(authSucess());
        Actions.drawer({type: 'reset'})
  };
}
