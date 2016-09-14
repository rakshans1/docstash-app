import React from 'react';
import { Scene, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import IntroCarousel from './components/IntroCarousel';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import NavigationDrawer from './components/NavigationDrawer';
import { APP_STYLES } from './utils/AppStyles';
import TabIcon from './components/TabIcon';
import Library from './components/Library';
import Torrent from './containers/Torrents';

export const scenes = Actions.create(
  <Scene  key="root">
    <Scene key="drawer" component={NavigationDrawer} open={false}>
      <Scene key="main" tabs={true}
                    icon={TabIcon}
                    selectedTabIcon="ios-home"
                    tabIcon="ios-home-outline"
                    navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                    titleStyle={{ color:'white' }}
      >

          <Scene key="library" component={Library}  initial={true} hideNavBar={false} />

         </Scene>
      <Scene key="torrent" component={Torrent} icon={TabIcon} title="Torrents"
        selectedTabIcon="ios-star" tabIcon="ios-star-outline"
        navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
        titleStyle={{ color:'white' }}
      />
    </Scene>

     <Scene  initial={true} key="introCarousel" component={IntroCarousel}  hideTabBar={true} hideNavBar={true} />
      <Scene key="login" component={Login} hideNavBar={true} />
      <Scene key="register" component={Register} hideNavBar={true} />
  </Scene>
);
