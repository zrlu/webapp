import React from 'react';
import "./style.scss";
import UserButton from "../../common/UserButton";
import Layout from "../../common/Layout";

class Home extends React.Component{

    render() {
        return (
            <Layout>
                <div className="Home">
                    <UserButton />
                    <div>
                        Home
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Home;