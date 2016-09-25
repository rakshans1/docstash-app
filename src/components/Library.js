import React from 'react'
import { View, Linking, Text, StyleSheet } from 'react-native';

class Library extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.container}>Docstash New Version Available</Text>
        <Text style={{color: 'blue', textAlign: 'center', fontSize: 20 }}
              onPress={() => Linking.openURL('https://github.com/rakshans1/docstash-app/releases/download/v2.0.0/Docstash-v2.0.apk')}>Download Here</Text>
      </View>
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
