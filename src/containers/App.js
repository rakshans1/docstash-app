import React, { PropTypes } from 'react';
import { StyleSheet,StatusBar, AsyncStorage } from 'react-native';
import { Router } from 'react-native-router-flux';
import { scenes } from '../scenes';
import { connect } from 'react-redux';
import { loginUserByToken } from '../actions/authActions';

class App extends React.Component {
  constructor() {
    super();
    StatusBar.setBackgroundColor('#000', true);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    AsyncStorage.getItem('token', (err, data) => {
      if (data !== null ) dispatch(loginUserByToken());
    });
  }
  render() {
      return (
        <Router sceneStyle={styles.container} scenes={scenes} />
      );
    }
}
App.propTypes = {
  dispatch: PropTypes.func
}
const styles=  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"transparent"
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
