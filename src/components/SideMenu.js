import React from 'react';
import { ScrollView, StyleSheet,View,Text,TouchableHighlight,Image } from 'react-native';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements'

class SideMenu extends React.Component {
      render() {
        const list = [
      {
        title: 'Library',
        icon: 'av-timer'
      },
      {
        title: 'Music',
        icon: 'flight-takeoff'
      }
    ]
    const drawer = this.context.drawer;
    return(
      <View style={styles.container}>
      <List>
        {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            icon={{name: item.icon}}
          />
        ))
        }
        </List>
      </View>
    );
  }
}
SideMenu.contextTypes = {
  drawer: React.PropTypes.object
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  list: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleWrapper:{
    flex:3,
    flexDirection:'row',
    alignItems:'center'
  }
});
export default SideMenu
