import React from 'react';
import LoginScene from '../../components/auth/LoginScene';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import { signinUser } from '../../actions/authActions';
import { ToastAndroid } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onFieldChange  = this.onFieldChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  validateEmail(event) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }
  onFieldChange(field,value) {
    this.setState({[field]:value});
  }

  loginUser() {
      if (this.validateEmail(this.state.email)){
        ToastAndroid.show('Bad Login Info', ToastAndroid.LONG)
      } else {
      let data = {
            email: this.state.email,
            password: this.state.password,
        };
      this.props.dispatch(signinUser(data.email, data.password))
    }
  }

  render() {
    return (
      <LoginScene
        {...this.state}
        loginUser={this.loginUser}
        onFieldChange={this.onFieldChange}
      />
    );
  }
}

function mapStateToProps(state) {
  return{ errorMessage: state.auth.error };
}

export default connect(mapStateToProps)(Login);
