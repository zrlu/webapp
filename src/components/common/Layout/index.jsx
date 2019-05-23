import React from "react";
import Navigation from "../Navigation";
import "./style.scss";

const Layout = (props) => (
        <div>
            <div>
                <Navigation/>
            </div>

            <div className="Layout-body">
                {props.children}
            </div>
        </div>
);

export default Layout;