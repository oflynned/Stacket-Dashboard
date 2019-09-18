import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import DevelopmentBoard from "./layouts/developmentBoard";

import './App.css';
import TeamManager from "./layouts/teamManager";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={"/projects"} component={DevelopmentBoard}/>
                    <Route exact path={"/team"} component={TeamManager}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
