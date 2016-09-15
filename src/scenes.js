import React from 'react';
import { Scene, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import IntroCarousel from './components/IntroCarousel';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import NavigationDrawer from './components/NavigationDrawer';
import { APP_STYLES } from './utils/AppStyles';
import TabIcon from './components/TabIcon';
import Library from './components/Library';
import Torrent from './containers/Torrents';

export const sceneslogin = Actions.create(
  <Scene  key="root">
    <Scene key="drawer" component={NavigationDrawer} open={false}>
      <Scene key="main" tabs={true}
                    icon={TabIcon}
                    selectedTabIcon="ios-home"
                    tabIcon="ios-home-outline"
                    navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                    titleStyle={{ color:'white' }}
                    type="reset"
                    default="library"
                    initial={true}
      >

          <Scene key="library" component={Library} hideNavBar={false} navigationBarStyle={APP_STYLES.navigationBarStyle} />

         </Scene>
      <Scene key="torrent" component={Torrent} icon={TabIcon} title="Torrents"
        selectedTabIcon="ios-star" tabIcon="ios-star-outline"
        navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
        titleStyle={{ color:'white' }}
      />
    </Scene>

  </Scene>
);

export const sceneslogout  = Actions.create(
  <Scene  key="root">
    <Scene  initial={true} key="introCarousel" component={IntroCarousel}  hideTabBar={true} hideNavBar={true} />
    <Scene key="login" component={Login}  direction="vertical" hideNavBar={false} navigationBarStyle={APP_STYLES.navigationBarStyle} title="Sign up for Docstash" titleStyle={{ color:'white' }}/>
    <Scene key="register" component={Register} hideNavBar={false} navigationBarStyle={APP_STYLES.navigationBarStyle}   title="Sign up for Docstash" titleStyle={{ color:'white' }}/>
  </Scene>
);
