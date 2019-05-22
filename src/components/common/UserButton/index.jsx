import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

class UserButton extends React.Component{

    render() {
        return (
            <div className="UserButton">
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default UserButton;