import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './Redux/store';
import { authUser } from './Kingdom_____/Auth/axn_auth';
import setAuthToken from './Kingdom_____/Auth/utils/setAuthToken';
// === Style ===
import './Design/sass/App.scss';
import { Kingdom } from './Kingdom_____/Styled';
import { BodyCont } from './Design/Styled_aoe';
//  Comps
import Navi from './Kingdom_____/Navi/Navi';
import Modal from './Kingdom_____/UI/Modal';
import About from './Phylum_____/About/About';
import Hello from './Kingdom_____/Auth/Auth';
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
  //  Modal State
  const [modalState, setModalState] = useState(false);
  //  Phylum Obj
  const PhylumObj = [
    { route: '/about', name: 'about', show: 'I N F O' },
    { route: '/talk', name: 'talk', show: 'T A L K' },
  ];

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Kingdom className='App bg-white'>
          <Modal
            id='app-modal'
            _setModalState={setModalState}
            _modalState={modalState}
          />
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
      </Router>
    </Provider>
  );
};

export default App;
