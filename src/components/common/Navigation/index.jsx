import React from 'react';
import "./style.scss";

class Navigation extends React.Component{

    render() {
        return (
            <div className="Navigation">
                <div className="Navigation-title-container">
                    <div className="Navigation-site-title">Title</div>
                </div>
                <div className="Navigation-entry-container">
                    <div className="Navigation-entry">Community</div>
                    <div className="Navigation-entry">Contact</div>
                </div>
            </div>
        )
    }
}

export default Navigation;