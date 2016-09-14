import React from 'react';
import SideMenu from './SideMenu';
import Drawer from 'react-native-drawer';
import {DefaultRenderer} from "react-native-router-flux";

class NavigationDrawer extends React.Component {
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref="navigation"
        type="overlay"
        content={<SideMenu />}
        tapToClose={true}
        acceptPan={true}
        styles={drawerStyles}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: { opacity:Math.max(0.54,1-ratio) }
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}
const drawerStyles = {
  drawer:{
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  }
}
export default NavigationDrawer
