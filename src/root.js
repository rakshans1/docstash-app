/* eslint-disable import/default */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import codePush from "react-native-code-push";

const store = configureStore();

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

Root = codePush(Root);

export default Root;
