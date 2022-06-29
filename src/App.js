import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { hasSessionLocally, isSessionValid } from './common/session/sessionHelper';

import Login from './pages/userIdentity/login';
import DevelopmentBoard from './pages/dashboard/developmentBoard';
import TeamManager from './pages/dashboard/teamManager';

import './App.css';
import AuthenticatedRoute from './pages/common/authenticatedRoute';
import LoadingScreen from 'react-loading-screen';
import PageNotFound from './pages/common/PageNotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasVerifiedSession: false,
      firstLoadCompleted: false
    };
  }

  componentDidMount() {
    if (!hasSessionLocally()) {
      this.setState({
        isLoading: false,
        hasVerifiedSession: false,
        firstLoadCompleted: true
      });

      return;
    }

    this.verifySessionValidity();
  }

  render() {
    return <BrowserRouter>
      <div className="App">
        <Switch>
          <LoadingScreen loading={this.state.isLoading}
                         bgColor="#FBF5F3"
                         spinnerColor="#EA0232"
                         textColor="#EA0232"
                         logoSrc={require('./assets/reactLogo.png')}>

            <Route exact path={'/login'} component={Login}/>

            <AuthenticatedRoute exact path={'/projects'}
                                component={DevelopmentBoard}
                                auth={this.state}/>

            <AuthenticatedRoute exact path={'/team'}
                                component={TeamManager}
                                auth={this.state}/>

            <Route component={PageNotFound}/>

            {this.state.hasVerifiedSession ?
              <Redirect to={'/projects'}/> :
              <Redirect to={'/'}/>}
          </LoadingScreen>
        </Switch>
      </div>
    </BrowserRouter>;
  }

  verifySessionValidity() {
    return isSessionValid()
      .then(() => {
        setTimeout(
          () => this.setState({
            isLoading: false,
            hasVerifiedSession: true,
            firstLoadCompleted: true
          }), 500);
      })
      .catch(() => {
        this.setState({
          hasVerifiedSession: false,
          firstLoadCompleted: true
        });
      });
  }
}

export default App;
