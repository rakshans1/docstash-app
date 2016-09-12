import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class RegisterScene extends React.Component {
  render () {
     const { name,email,password,passwordConfirmation,onFieldChange, registerUser } = this.props;
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.label} >Name</FormLabel>
        <FormInput inputStyle={styles.textInput} underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('name',value)} value={name}/>
        <FormLabel labelStyle={styles.label}>Email</FormLabel>
        <FormInput underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('email',value)} value={email}/>
        <FormLabel labelStyle={styles.label}>Password</FormLabel>
        <FormInput underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('password',value)} value={password}/>
        <FormLabel labelStyle={styles.label}>Confirm Password</FormLabel>
        <FormInput  underlineColorAndroid="#007ee5" onChangeText={(value) => onFieldChange('passwordConfirmation',value)} value={passwordConfirmation}/>
        <Button raised title="SIGN UP" buttonStyle={styles.button} onPress={()=> registerUser()}/>
        <View style={styles.inline}>
          <Text style={styles.already}>Already have an account?</Text>
          <Text style={styles.signin} onPress={()=>Actions.login()}>Sign in</Text>
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
export default RegisterScene;
