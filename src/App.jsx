import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './Redux/store';
import { authUser } from './1_Kingdom_____/Auth/axn_auth';
import setAuthToken from './1_Kingdom_____/Auth/utils/setAuthToken';
// === Style ===
import './Design/sass/App.scss';
import { Kingdom } from './1_Kingdom_____/Styled';
import { BodyCont } from './Design/Styled_aoe';
//  Comps
import Navi from './1_Kingdom_____/Navi/Navi';
import Modal from './1_Kingdom_____/UI/Modal';
import About from './2_Phylum_____/About/About';
import Hello from './1_Kingdom_____/Auth/Auth';
import Talk from './2_Phylum_____/Talk/Talk';
import Profile from './2_Phylum_____/Profile/Profile';

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
  useEffect(
    () => console.log(`$$   setModalState() > modalState = `, modalState),
    [modalState]
  );
  //  Phylum Obj
  const PhylumObj = [
    { route: '/about', name: 'about', show: 'I N F O' },
    { route: '/talk', name: 'talk', show: 'T A L K' },
  ];

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Kingdom className='App bg-gry2'>
          <Modal
            id='app-modal'
            _setModalState={setModalState}
            _modalState={modalState}
          />
          <Navi _phylumObj={PhylumObj} />
          <BodyCont id='app-BodyCont'>
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
