import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = (talkId) => {
  const [hookMsgs, setHookMsgs] = useState([]);
  const sockRef = useRef();
  const roomId = talkId;
  console.log('talkId is a ', typeof talkId);

  useEffect(() => {
    console.log(`$$$    useChat() > hookMsgs: `, hookMsgs);
  }, [hookMsgs]);

  useEffect(() => {
    sockRef.current = io(REACT_APP_API_URL);

    sockRef.current.on('message', (msgObj) => {
      console.log(`$$$  useChat() > .on('message', ${msgObj.body.text})`);
      setHookMsgs((hookMsgs) => [...hookMsgs, msgObj]);
    });

    return () => {
      setHookMsgs([]);
      sockRef.current.disconnect();
    };
  }, []);

  const registerClient = (userId, talkId) => {
    console.log(`$$$    useChat() > .emit('register', cb)`);
    sockRef.current.emit('register', { userId, talkId });
  };
  const initTalk = (userId, talkId, talkHistory) => {
    console.log(`$$$    useChat() > .emit('init-talk', cb)`);
    sockRef.current.emit('init-talk', talkId);
  };
  const initHistory = (talkId) => {
    console.log(`$$$    useChat() > .emit('init-talk', cb)`);
    sockRef.current.emit('init-talk', talkId);
  };

  const sendMsg = (msgObj) => {
    console.log(`$$$    useChat() > .emit('message', cb)`);
    sockRef.current.emit('message', msgObj);
  };

  return { hookMsgs, setHookMsgs, registerClient, initTalk, sendMsg };
};

export default useChat;
