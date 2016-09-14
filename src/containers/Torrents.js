import React from 'react'
import { Text, StyleSheet } from 'react-native';

class Torrent extends React.Component {
  render() {
    return(
      <Text style={styles.container}>Hi</Text>
    );
  }
}
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff"
  }
});
export default Torrent
