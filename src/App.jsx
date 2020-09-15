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
import Alert from './1_Kingdom_____/Alert/Alert';
import Modal from './1_Kingdom_____/UI/Modal';
import Navi from './1_Kingdom_____/Navi/Navi';
import Hello from './2_Phylum_____/Hello/Hello';
import About from './2_Phylum_____/About/About';
import Talk from './2_Phylum_____/Talk/Talk';
import Profile from './2_Phylum_____/Profile/Profile';

// //  Set Headers with 'x-auth-token': 'token'
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  //  Auth User
  useEffect(() => {
    console.log('$$$  > App > authUser() >');
    store.dispatch(authUser());
  }, []);
  //  Modal State
  const [modalState, setModalState] = useState(false);

  //  Phylum Obj
  const PhylumObj = [
    { route: '/about', name: 'about', private: false, show: 'I N F O' },
    { route: '/talk', name: 'talk', private: false, show: 'T A L K' },
    // { route: '/profile', name: 'profile', private: true, show: 'P R O F' },
  ];

  return (
    <Provider store={store}>
      <Router basename='/'>
        <Kingdom id='App-Kingdom' className='App bg-gry2'>
          <Alert />
          <Modal
            id='App-Modal'
            _setModalState={setModalState}
            _modalState={modalState}
          />
          <Navi id='App-Navi' _phylumObj={PhylumObj} />
          <BodyCont id='App-BodyCont'>
            <Route exact path='/' component={About} />
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
