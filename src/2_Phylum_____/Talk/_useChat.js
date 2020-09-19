import { useEffect, useRef, useState } from 'react';
import sockClient from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = () => {
  const [hookMsgs, setHookMsgs] = useState([]);
  const sockRef = useRef();

  useEffect(() => {
    sockRef.current = sockClient(REACT_APP_API_URL);
    sockRef.current.on('sockMsg', ({ msg }) => {
      setHookMsgs((hookMsgs) => [...hookMsgs, msg]);
    });

    return () => {
      sockRef.current.disconnect();
    };
  }, []);

  const sendMsg = ({ msg }) => {
    sockRef.current.emit('sockMsg', { msg });
  };

  return { hookMsgs, sendMsg };
};

export default useChat;
