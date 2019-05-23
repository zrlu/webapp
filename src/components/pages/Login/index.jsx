import React from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {testApi} from "./action";
import {setState} from "../../../actions";
import "./style.scss";
import Layout from "../../common/Layout";
import EditText from "../../common/EditText";
import Button from "../../common/Button";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {FACEBOOK_APP_ID} from '../../../constants';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
    }

    componentDidMount() {
        this.props.testApi();
    }

    onEmailChange(e) {
        this.props.setState("LOGIN_EMAIL", e.target.value);
    }

    onPasswordChange(e) {
        this.props.setState("LOGIN_PASSWORD", e.target.value);
    }

    onSignupClick() {
        this.props.history.push("/signup");
    }

    render() {
        const {
            email,
            password
        } = this.props.login;

        return (
            <Layout>
                <div className="Login">
                    <div>
                        Login
                    </div>
                    <EditText type="text" value={email} onChange={this.onEmailChange} name="Email"/>
                    <EditText type="password" value={password} onChange={this.onPasswordChange} name="Password"/>
                    <Button onClick={() => {
                    }} name="Sign in"/>
                    <Button onClick={this.onSignupClick} name="Sign up with email"/>
                    <FacebookLogin
                        appId={FACEBOOK_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={() => {
                        }}
                        callback={() => {
                        }}/>

                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        render={renderProps => (
                            <Button onClick={renderProps.onClick} disabled={renderProps.disabled} name="Login with Google" />
                        )}
                        buttonText="Login"
                        onSuccess={() => {
                        }}
                        onFailure={() => {
                        }}
                        cookiePolicy={'single_host_origin'}
                    />

                </div>
            </Layout>
        )
    }
}

// redux
function mapStateToProps(state) {
    return {
        login: state.login.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({testApi, setState}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));