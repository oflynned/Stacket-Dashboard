import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { KEY_ID, KEY_NAME, KEY_SESSION, saveKey } from '../../common/session/localCache';
import { fetchNewAccount } from '../../common/network/api';

import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirecting: false
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    const { isRedirecting } = this.state;
    if (isRedirecting)
      return <Redirect to={'/projects'}/>;

    return (
      <div className={'login'}>
        <div className={'click-me'} onClick={this.onButtonClick}>
          Click me
        </div>
      </div>
    );
  }

  onButtonClick() {
    fetchNewAccount({ name: 'Ed' }, 'oflynned@gmail.com', 'password1')
      .then(({ data: { session, user: { _id, name } } }) => {
        // cache the session returned from the API first
        saveKey(KEY_SESSION, session);
        saveKey(KEY_ID, _id);
        saveKey(KEY_NAME, name);

        // now forcibly redirect the user to the dashboard
        this.setState({ isRedirecting: true });
      })
      .catch(err => console.log(err));
  }
}

export default Login;
