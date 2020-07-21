import React, { Fragment, useEffect } from 'react';
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
import Hello from './Phylum_____/Hello/Hello';
import Talk from './Phylum_____/Talk/Talk';
import Profile from './Phylum_____/Profile/Profile';

//  Set Headers with 'x-auth-token': 'token'
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //  Auth User
  useEffect(() => {
    store.dispatch(authUser());
  }, []);

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Fragment>
          <Kingdom className='App'>
            <Navi />
            <Phylum>
              <Route exact path='/' component={Hello} />
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/talk' component={Talk} />
                <Route exact path='/profile' component={Profile} />
              </Switch>
            </Phylum>
          </Kingdom>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;