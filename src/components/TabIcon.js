import React, { PropTypes } from 'react';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class TabIcon extends React.Component {
  render() {
    return(
      <View>
        <Icon
          name={this.props.selected ? this.props.selectedTabIcon : this.props.tabIcon }
          size={22}
          color={this.props.selected ? '#000' :'#666'}
          style={{width:22,height:22,alignSelf:'center',fontWeight:'300',}}
        />
      </View>
    );
  }
}
TabIcon.propTypes = {
  selected:PropTypes.bool,
  selectedTabIcon:PropTypes.string.isRequired,
  tabIcon:PropTypes.string.isRequired
}

export default TabIcon
