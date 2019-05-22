import React from 'react';
import "./style.scss";
import UserButton from "../../common/UserButton";

class Home extends React.Component{

    render() {
        return (
            <div className="Home">
                <UserButton />
                <div>
                    Home
                </div>
            </div>
        )
    }
}

export default Home;