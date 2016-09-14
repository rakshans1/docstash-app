import React from 'react'
import { Text, StyleSheet } from 'react-native';

class Library extends React.Component {
  render() {
    return(
      <Text style={styles.container}>Docstash app will update soon</Text>
    );
  }
}
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    color: "#000",
    backgroundColor: "#fff"
  }
});
export default Library
