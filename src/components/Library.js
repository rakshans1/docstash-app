import React from 'react'
import { Text, StyleSheet } from 'react-native';

class Library extends React.Component {
  render() {
    return(
      <Text style={styles.container}>Hi</Text>
    );
  }
}
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000"
  }
});
export default Library
