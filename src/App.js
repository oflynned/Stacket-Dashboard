import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import DevelopmentBoard from "./layouts/developmentBoard";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={"/"} component={DevelopmentBoard}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
