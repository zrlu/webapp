import React from 'react';
import {Route} from 'react-router-dom'
import Navigation from "./components/common/Navigation";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
    return (
        <div className="App">
            <header>
                <Navigation/>
            </header>

            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </main>
        </div>
    );
}

export default App;
