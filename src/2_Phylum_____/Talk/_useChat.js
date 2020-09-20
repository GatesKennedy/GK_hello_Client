import { useEffect, useRef, useState } from 'react';
import sockClient from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = () => {
  const [hookMsgs, setHookMsgs] = useState([]);
  const sockRef = useRef();

  useEffect(() => {
    console.log(`$$$    useChat() > hookMsgs: `, hookMsgs);
  }, [hookMsgs]);

  useEffect(() => {
    sockRef.current = sockClient(REACT_APP_API_URL);
    sockRef.current.on('sockMsg', (msg) => {
      setHookMsgs((hookMsgs) => [...hookMsgs, msg]);
    });

    return () => {
      setHookMsgs([]);
      sockRef.current.disconnect();
    };
  }, []);

  const initHookMsgs = (initMsgs) => {
    console.log(`$$$    useChat() > initHookMsgs()`);
    setHookMsgs(() => [...initMsgs]);
  };

  const sendMsg = (msg) => {
    sockRef.current.emit('sockMsg', msg);
  };

  return { hookMsgs, initHookMsgs, sendMsg };
};

export default useChat;
