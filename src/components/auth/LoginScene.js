import React from 'react';
import {  StyleSheet, Text, View,StatusBar } from 'react-native';
import { FormLabel, FormInput, Button, SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import LoadingIndicator from '../LoadingIndicator';

class LoginScene extends React.Component {
  constructor(props) {
    super(props)
    StatusBar.setBackgroundColor('#0476D3', true);
  }
  render () {
    const { email, password, onFieldChange, loginUser, socialLogin, loading } = this.props;
    return (
      <View style={styles.container}>
      {loading > 0 && <LoadingIndicator />}
        <FormLabel labelStyle={styles.label}>Email</FormLabel>
        <FormInput keyboardType="email-address" underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('email',value)} value={email}/>
        <FormLabel labelStyle={styles.label}>Password</FormLabel>
        <FormInput  secureTextEntry={true} underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('password',value)} value={password}/>
        <Button raised title="LOGIN" buttonStyle={styles.button} onPress={()=>loginUser()} />
        <View style={styles.inline}>
          <Text style={styles.already}>Dont have an account?</Text>
          <Text style={styles.signin} onPress={()=>Actions.register({type: 'replace'})}>Register</Text>
        </View>
      <SocialIcon
          title="Sign In With Facebook"
          button
          raised={true}
          type="facebook"
          onPress={()=> socialLogin("fb")}
        />
      <SocialIcon
          title="Sign In  Google"
          button
          type="google-plus-official"
          onPress={()=> socialLogin("google")}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50
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
    paddingRight: 100,
    backgroundColor: '#007ee5'
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
