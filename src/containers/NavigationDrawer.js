import React, {PropTypes} from 'react';
import SideMenu from '../components/SideMenu';
import Drawer from 'react-native-drawer';
import {DefaultRenderer} from "react-native-router-flux";
import { connect } from 'react-redux';

class NavigationDrawer extends React.Component {
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref="navigation"
        type="overlay"
        content={<SideMenu user={this.props.user}/>}
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

NavigationDrawer.propTypes = {
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return{ user: state.user };
}

export default connect(mapStateToProps)(NavigationDrawer);
