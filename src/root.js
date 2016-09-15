/* eslint-disable import/default */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import codePush from "react-native-code-push";


class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render () {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <App/>
      </Provider>
    );
  }
}

Root = codePush(Root);

export default Root;
