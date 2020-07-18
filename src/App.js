import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// === REDUX ===
import { Provider } from 'react-redux';
import store from './Kingdom_____/State/store';
import { authUser } from './Phylum_____/User/rdx_axn/axn_auth';
import setAuthToken from './Phylum_____/User/utils/setAuthToken';
// === Style ===
import './sass/App.scss';
//  Comps
import Hello from './Kingdom_____/Comps/Hello';
import Navi from './Kingdom_____/Comps/Navi';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Fragment>
          <Navi />
          <Hello />
        </Fragment>
      </header>
    </div>
  );
}

export default App;
