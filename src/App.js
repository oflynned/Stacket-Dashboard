import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DevelopmentBoard from './pages/dashboard/developmentBoard';

import './App.css';
import TeamManager from './pages/dashboard/teamManager';
import Login from './pages/userIdentity/login';

function App() {
  return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={['/', '/login']} component={Login}/>
                    <Route exact path={'/projects'} component={DevelopmentBoard}/>
                    <Route exact path={'/team'} component={TeamManager}/>
                </Switch>
            </div>
        </BrowserRouter>
  );
}

export default App;
