import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,compose(
    applyMiddleware(thunk, logger),
    devTools()
  ));
}
