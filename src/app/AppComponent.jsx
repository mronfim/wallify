import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Menu,
} from 'semantic-ui-react';

import './App.css';

import Authentication from './auth/Authentication';
import Home from './home/Home';

class AppComponent extends Component {
  _renderAuthButtons = () => {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (
        <div className='right menu'>
          <Menu.Item onClick={() => this.props.linkTo('/login')}>Login</Menu.Item>
          <Menu.Item onClick={() => this.props.linkTo('/register')}>Register</Menu.Item>
        </div>
      )
    } else {
      return (
        <div className='right menu'>
          <Menu.Item onClick={() => this.props.logOut()}>Log Out</Menu.Item>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Item header>Wallify</Menu.Item>
          {this._renderAuthButtons()}
        </Menu>
        <main>
          <Route exact path='/login'
            render={(props) => <Authentication {...props} login />}
          />
          <Route exact path='/register'
            render={(props) => <Authentication {...props} register />}
          />
          <Route exact path='/'
            render={(props) => <Home {...props} />}
          />
        </main>
      </div>
    );
  }
}

export default AppComponent;
