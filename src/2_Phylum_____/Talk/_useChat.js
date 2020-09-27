import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = (talkId) => {
  const [chatContent, setChatContent] = useState([]);
  const sockRef = useRef();

  useEffect(() => {
    sockRef.current = io(REACT_APP_API_URL);

    sockRef.current.on('chatMsg', (msgObj) => {
      console.log(`$$$  useChat() > .on('chatMsg', cb) > 
          talkId = ${msgObj.talkId}`);
      setChatContent((chatContent) => [...chatContent, msgObj]);
    });
    sockRef.current.on('status', (res) => {
      console.log(`$$$  useChat() > .on('status', cb)`);
      console.log(res);
    });

    return () => {
      // setHookMsgs([]);
      sockRef.current.disconnect();
    };
  }, []);

  const registerClient = (userId, talkId) => {
    console.log(`$$$    useChat() > .emit('register', {userId, talkId})`);

    sockRef.current.emit('register', { userId, talkId });
  };
  const initTalk = (userId, talkId, talkHistory) => {
    console.log(`$$$    useChat() > .emit('init-talk', talkId)`);

    sockRef.current.emit('init-talk', talkId);
  };

  const sendMsg = (msgObj) => {
    console.log(`$$$    useChat() > .emit('chatMsg', msgObj)`);
    sockRef.current.emit('chatMsg', msgObj);
  };

  return { chatContent, setChatContent, registerClient, initTalk, sendMsg };
};

export default useChat;
