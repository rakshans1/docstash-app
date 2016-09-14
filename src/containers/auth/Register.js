import React from 'react';
import RegisterScene from '../../components/auth/RegisterScene';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import { signupUser } from '../../actions/authActions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordconfirmation: '',
    };
    this.onFieldChange  = this.onFieldChange.bind(this);
    this.registerUser  = this.registerUser.bind(this);
  }

  onFieldChange(field,value) {
    this.setState({[field]: value});
  }

  registerUser() {
    let data = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        };
    this.props.dispatch(signupUser(data.name, data.email, data.password))
  }

  render() {
    return (
      <RegisterScene
        {...this.state}
        onFieldChange={this.onFieldChange}
        registerUser={this.registerUser}
      />
    );
  }
}
function mapStateToProps(state) {
  return{ errorMessage: state.auth.error };
}

export default connect(mapStateToProps)(Register);
