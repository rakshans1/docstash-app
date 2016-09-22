import React from 'react';
import { ScrollView, StyleSheet,View,Text,TouchableHighlight,Image } from 'react-native';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements'

class SideMenu extends React.Component {
      render() {
        let { user } = this.props;
        const list = [
      {
        title: 'Library',
        icon: 'ios-folder-outline'
      },
      {
        title: 'Recent',
        icon: 'ios-time-outline'
      },
      {
        title: 'Documents',
        icon: 'ios-document-outline'
      },
      {
        title: 'Videos',
        icon: 'ios-videocam-outline'
      },
      {
        title: 'Music',
        icon: 'ios-musical-notes-outline'
      },
      {
        title: 'Images',
        icon: 'ios-images-outline'
      },
      {
        title: 'Torrent',
        icon: 'ios-cloud-download-outline',
      },
      {
        title: 'Link',
        icon: 'ios-link-outline',
      },
      {
        title: 'Twitter',
        icon: 'logo-twitter',
      }
    ]
    const drawer = this.context.drawer;
    return(
      <View style={styles.container}>
          <Image
          style={styles.avatar}
          source={{uri: user.picture }}
          />
          <Text style={styles.avatarName}>{user.name}</Text>
          <Text style={styles.avatarEmail}>{user.email}</Text>
      <List>
        {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            icon={{name: item.icon, color: "#888"}}
            containerStyle={styles.listContainer}
            titleStyle={styles.titleStyle}
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  avatarName: {
    marginLeft: 10,
    color: "#000",
  },
  avatarEmail: {
    color: "#ccc",
    marginLeft: 10
  },
  list: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    borderBottomColor: "transparent"
  },
  titleStyle:{
    color: "#000",
    marginLeft: 10,
    // backgroundColor: "pink"
  }
});
export default SideMenu
