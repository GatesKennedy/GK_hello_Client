import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = (talkId) => {
  const [chatContent, setChatContent] = useState([]);
  //
  const sockRef = useRef();
  useEffect(() => {
    console.log('$$$    chatContent: ', chatContent);
  }, [chatContent]);

  useEffect(() => {
    sockRef.current = io(REACT_APP_API_URL);
    console.log('$$$$$    chatContent: ', chatContent);

    sockRef.current.on('chatMsg', (msgObj) => {
      console.log(
        `$$$  useChat() > .on('chatMsg', cb) > 
      talkId = ${msgObj.talkId}`
      );
      console.log(`$$$   msgObj: `, msgObj);
      console.log(`$$$   chatContent: `, chatContent);

      const newContent = chatContent.find(
        (chat) => chat.talk_id === msgObj.talkId
      );
      newContent && console.log('$$$    newContent: ', newContent);
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
