import React from 'react';
import "./style.scss";
import {withRouter} from 'react-router-dom';

class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.onTitleClick = this.onTitleClick.bind(this);
    }

    onTitleClick(){
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="Navigation">
                <div className="Navigation-title-container">
                    <div
                        className="Navigation-site-title"
                        onClick={this.onTitleClick}
                    >
                        Example App
                    </div>
                </div>
                <div className="Navigation-entry-container">
                    <div className="Navigation-entry">Community</div>
                    <div className="Navigation-entry">Contact</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Navigation);