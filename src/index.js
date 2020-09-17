import React from 'react';
import { render } from 'react-dom';
import App from './App';
// === Logs ===
console.log('REACT_APP_NAME= ', process.env.REACT_APP_NAME);
console.log('REACT_APP_API_URL= ', process.env.REACT_APP_API_URL);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
