import React, { PropTypes } from 'react';
import { StyleSheet,StatusBar, View, Linking } from 'react-native';
import { Router } from 'react-native-router-flux';
import { sceneslogin, sceneslogout } from '../scenes';
import { connect } from 'react-redux';
import { authSucess } from '../actions/authActions';
import {userInfo} from '../actions/userActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    StatusBar.setBackgroundColor('#0476D3', true);
  }

  componentDidMount() {
  Linking.getInitialURL().then(url => {
    if (url) {
      const token = url.split(/=(.*)#/);
      this.props.dispatch(authSucess(token[1]));
      this.props.dispatch(userInfo(token[1]));
    }
  });
}

  render() {
    const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <Router sceneStyle={styles.container} scenes={sceneslogin} />
      }
      return (
        <View style={styles.container}>
          <Router scenes={sceneslogout} />
        </View>
      );
    }
}
App.propTypes = {
  dispatch: PropTypes.func
}
const styles=  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff"
  },
});

App.propTypes = {
  isAuthenticated: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(App);
