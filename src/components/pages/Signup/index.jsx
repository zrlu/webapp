import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setState} from "../../../actions";
import "./style.scss";
import Layout from "../../common/Layout";
import EditText from "../../common/EditText";
import Button from "../../common/Button";

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(e) {
        this.props.setState("SIGNUP_EMAIL",e.target.value);
    }

    onPasswordChange(e) {
        this.props.setState("SIGNUP_PASSWORD",e.target.value);
    }

    render() {
        const {
            email,
            password
        } = this.props.signup;

        return (
            <Layout>
                <div className="Signup">
                    <div>
                        Sign up
                    </div>
                    <EditText type="text" value={email} onChange={this.onEmailChange} name="Email" />
                    <EditText type="password" value={password} onChange={this.onPasswordChange} name="Password" />
                    <Button onClick={() => {}} name="Sign up" />
                </div>
            </Layout>
        )
    }
}
// redux
function mapStateToProps(state) {
    return {
        signup: state.signup.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setState}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);