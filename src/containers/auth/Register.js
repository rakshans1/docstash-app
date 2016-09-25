import React, { PropTypes} from 'react';
import RegisterScene from '../../components/auth/RegisterScene';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';
import { ToastAndroid, Linking } from 'react-native';

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
    this.socialLogin  = this.socialLogin.bind(this);
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



  socialLogin(auth) {
    if (auth === "fb") {
      Linking.openURL("https://docstash-server.herokuapp.com/auth/facebook/mobile");
    } else {
      Linking.openURL("https://docstash-server.herokuapp.com/auth/google/mobile");
    }
  }



  render() {
    const { loading } = this.props;
    return (
      <RegisterScene
        {...this.state}
        onFieldChange={this.onFieldChange}
        registerUser={this.registerUser}
        socialLogin={this.socialLogin}
        loading={loading}
      />
    );
  }
}
Register.propTypes  = {
  dispatch: PropTypes.func,
  loading: PropTypes.number
}
function mapStateToProps(state) {
  return{ loading : state.pendingTasks };
}

export default connect(mapStateToProps)(Register);
