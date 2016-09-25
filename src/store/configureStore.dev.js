import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import reduxStorageActions from '../constants/reduxstorage';

const logger = createLogger();


export default function configureStore(onComplete) {
  const rootReducer = storage.reducer(reducers);
  const engine = createEngine('Docstash');
  const storeMiddleware = storage.createMiddleware(engine, reduxStorageActions);

  let store =  createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk, logger, storeMiddleware),
    devTools()
  ));

  const load = storage.createLoader(engine);
  load(store)
  .then(onComplete)
  .catch(() => console.log('Failed to load previous state'));

devTools.updateStore(store);
  return store;
}
