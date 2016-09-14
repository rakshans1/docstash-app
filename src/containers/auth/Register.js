import React, { PropTypes} from 'react';
import RegisterScene from '../../components/auth/RegisterScene';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import { ToastAndroid } from 'react-native';

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
    this.validateEmail = this.validateEmail.bind(this);
  }
  validateEmail(event) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }
  onFieldChange(field,value) {
    this.setState({[field]: value});
  }

  registerUser() {
    if (!this.validateEmail(this.state.email)){
      ToastAndroid.show('Email Invalid', ToastAndroid.LONG)
    } else if (this.state.password.length < 8) {
      ToastAndroid.show('Password must be greater than 8 digit', ToastAndroid.LONG)
    } else {
      let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          };
      this.props.dispatch(signupUser(data.name, data.email, data.password));
    }
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
Register.propTypes  = {
  dispatch: PropTypes.func
}
function mapStateToProps(state) {
  return{ errorMessage: state.auth.error };
}

export default connect(mapStateToProps)(Register);
