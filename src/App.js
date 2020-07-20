import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './Redux/store';
import { authUser } from './Phylum_____/Auth/axn_auth';
import setAuthToken from './Phylum_____/Auth/utils/setAuthToken';
// === Style ===
import './sass/App.scss';

import { Kingdom } from './Kingdom_____/Styled';
import { Phylum } from './Phylum_____/Styled';
//  Comps
import Navi from './Kingdom_____/Navi/Navi';
import About from './Phylum_____/About/About';
import Auth from './Phylum_____/Auth/Auth';
import Hello from './Phylum_____/Hello/Hello';
import Chat from './Phylum_____/Chat/Chat';
import Profile from './Phylum_____/Profile/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Kingdom className='App'>
          <Fragment>
            <Navi />
            <Phylum>
              <Switch>
                <Route path='/' component={Hello} />
                <Route path='/about' component={About} />
                <Route path='/chat' component={Chat} />
                <Route path='/profile' component={Profile} />
              </Switch>
            </Phylum>
          </Fragment>
        </Kingdom>
      </Router>
    </Provider>
  );
}

export default App;
