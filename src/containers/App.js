import React, { Component } from 'react';
import { StyleSheet,StatusBar } from 'react-native';
import { Router, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { scenes } from '../scenes';

class App extends Component {
  constructor() {
    super();
    StatusBar.setBackgroundColor('#000', true);
  }
  render() {
    return (
      <Router sceneStyle={styles.container} scenes={scenes} />
    );
  }
}

const styles=  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"transparent"
  },
});

export default App;
