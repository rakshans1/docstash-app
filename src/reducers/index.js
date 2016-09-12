import {combineReducers} from 'redux';
import pendingTasks from './ajaxStatusReducer';
import authReducer from './authReducer';
import notification from './notification';
import modalReducer from './modalReducer';
import user from './userReducer';
import shortnerReducer from './shortnerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  pendingTasks,
  notification: notification,
  modal: modalReducer,
  user: user,
  shortner: shortnerReducer
});

export default rootReducer;
