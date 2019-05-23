import React from 'react';
import {Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
    return (
        <div className="App">
            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
            </main>
        </div>
    );
}

export default App;
