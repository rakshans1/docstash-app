import React from 'react';
import { Scene, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import IntroCarousel from './components/IntroCarousel';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import NavigationDrawer from './containers/NavigationDrawer';
import { APP_STYLES } from './utils/AppStyles';
import TabIcon from './components/TabIcon';
import Library from './components/Library';
import Torrent from './containers/Torrents';

export const sceneslogin = Actions.create(
  <Scene  key="root">
    <Scene key="drawer" component={NavigationDrawer} open={false}>
      <Scene key="home" tabs={true}
                    tabBarStyle={APP_STYLES.tabBarStyle}
                    navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                    tabBarSelectedItemStyle={APP_STYLES.tabBarSelectedItemStyle}
      >

      <Scene key="main"
                 icon={TabIcon}
                  title="Torrent Download"
                 selectedTabIcon="ios-home"
                 tabIcon="ios-home-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
         >
         <Scene key="categories" component={Library} initial={true} hideNavBar={false} type="reset"/>
         </Scene>

         <Scene key="torrent" component={Torrent} icon={TabIcon}
                 title="Torrent Download"
                 selectedTabIcon="ios-cloud-download" tabIcon="ios-cloud-download-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
          />
          <Scene key="favorites" component={Torrent} icon={TabIcon} title="Favorites"
                 selectedTabIcon="ios-link" tabIcon="ios-link-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
          />

          <Scene key="setting" component={Torrent}  icon={TabIcon} title="Setting"
                 selectedTabIcon="ios-person" tabIcon="ios-person-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}

          />


      </Scene>
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
