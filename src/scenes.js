import React from 'react';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import IntroCarousel from './components/IntroCarousel';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="register" component={Register} hideNavBar={true} />
     <Scene initial={true}  key="introCarousel" component={IntroCarousel}  hideTabBar={true} hideNavBar={true}/>
  </Scene>
);
