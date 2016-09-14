import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class LoginScene extends React.Component {
  render () {
    const { email, password, onFieldChange, loginUser } = this.props;
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.label}>Email</FormLabel>
        <FormInput keyboardType='email-address' underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('email',value)} value={email}/>
        <FormLabel labelStyle={styles.label}>Password</FormLabel>
        <FormInput  secureTextEntry={true} underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('password',value)} value={password}/>
        <Button raised title="LOGIN" buttonStyle={styles.button} onPress={()=>loginUser()}/>
        <View style={styles.inline}>
          <Text style={styles.already}>Dont have an account?</Text>
          <Text style={styles.signin} onPress={()=>Actions.register()}>Register</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30
  },
  label: {
    fontSize: 14,
    color: '#888888'
  },
  textInput:{
    height: 40,
    borderWidth: 1,
    marginBottom:20,
    fontSize:15,
    paddingLeft:10,
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100
  },
  already: {
    color: '#666',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 50
  },
  inline: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  signin: {
    color: '#007ee5',
    fontSize: 15,
    fontWeight: '300',
    marginLeft: 10,
    textAlign: 'center'
  },
  containerStyle: {
    borderColor: 'black'
  }
})
export default LoginScene;
