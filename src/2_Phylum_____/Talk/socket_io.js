//~~~~~~~~~~~~~~~~~~~~~~~
//    Socket.io
//~~~~~~~~~~~~~~~~~~~~~~~

// //  init
// const io = require('socket.io-client');
// const socket = io.connect(process.env.REACT_APP_API_URL);

// //----------------------------
// export const ioGreet = async () => {
//   await socket.on('alert', (message) => {
//     console.log(message);
//   });
// };

// //----------------------------
// socket.on('error', function (err) {
//   console.log('received socket error:');
//   console.log(err);
// });

import openSocket from 'socket.io-client';
const socket = openSocket(process.env.REACT_APP_URL);

//----------------------------
function ioGreet(cb) {
  const message = 'there you are peter...';
  socket.on('alert', (text) => cb(null, text));
  socket.emit('alert', message);
}
export { ioGreet };
