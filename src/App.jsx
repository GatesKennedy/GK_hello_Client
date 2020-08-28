import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './Redux/store';
import { authUser } from './Phylum_____/Auth/axn_auth';
import setAuthToken from './Phylum_____/Auth/utils/setAuthToken';
// === Style ===
import './Design/sass/App.scss';
import { Kingdom } from './Kingdom_____/Styled';
import { BodyCont } from './Design/Styled_aoe';
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
  //  Phylum Obj
  const PhylumObj = [
    { route: '/about', name: 'about', show: 'I N F O' },
    { route: '/talk', name: 'talk', show: 'T A L K' },
  ];

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Fragment>
          <Kingdom className='App bg-white'>
            <Navi _phylumObj={PhylumObj} />
            <BodyCont>
              <Route exact path='/' component={Hello} />
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/talk' component={Talk} />
                <Route exact path='/profile' component={Profile} />
              </Switch>
            </BodyCont>
          </Kingdom>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
