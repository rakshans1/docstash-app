import React, {PropTypes} from 'react';
import LoginScene from '../../components/auth/LoginScene';
import {connect} from 'react-redux';
import {signinUser} from '../../actions/authActions';
import {ToastAndroid, Linking} from 'react-native';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.socialLogin = this.socialLogin.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    validateEmail(event) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(event);
    }
    onFieldChange(field, value) {
        this.setState({[field]: value});
    }

    loginUser() {
        if (!this.validateEmail(this.state.email)) {
            ToastAndroid.show('Email Invalid', ToastAndroid.LONG)
        } else if (this.state.password.length < 8) {
            ToastAndroid.show('Password must be greater than 8 digit', ToastAndroid.LONG)
        } else {
            let data = {
                email: this.state.email,
                password: this.state.password
            };
            this.props.dispatch(signinUser(data.email, data.password))
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
        const {loading} = this.props;
        return (<LoginScene {...this.state} loginUser={this.loginUser} onFieldChange={this.onFieldChange} socialLogin={this.socialLogin} loading={loading}/>);
    }
}

Login.propTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.number
}
function mapStateToProps(state) {
    return {loading: state.pendingTasks};
}

export default connect(mapStateToProps)(Login);
