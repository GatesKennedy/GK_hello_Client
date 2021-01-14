import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = (talkId) => {
  const [chatContent, setChatContent] = useState([]);
  //
  const sockRef = useRef();
  useEffect(() => {}, [chatContent]);

  useEffect(() => {
    sockRef.current = io(REACT_APP_API_URL);
    sockRef.current.on('chatMsg', (msgObj) => {
      setChatContent((chatContent) => {
        const foundConvo = chatContent.find(
          (chat) => chat.talk_id === msgObj.talkId
        );
        Array.isArray(foundConvo.msgobj) && foundConvo.msgobj.push(msgObj);
        const newContent = chatContent.filter(
          (chat) => chat.talk_id !== msgObj.talkId
        );
        newContent.push(foundConvo);
        return newContent;
      });
    });

    sockRef.current.on('status', (res) => {
      // console.log(`$$$  useChat() > .on('status', cb)`);
      // console.log(res);
    });

    return () => {
      // setHookMsgs([]);
      sockRef.current.disconnect();
    };
  }, []);

  const registerClient = (userId, talkId) => {
    sockRef.current.emit('register', { userId, talkId });
  };
  const initTalk = (userId, talkId, talkHistory) => {
    sockRef.current.emit('init-talk', talkId);
  };

  const sendMsg = (msgObj) => {
    sockRef.current.emit('chatMsg', msgObj);
  };

  return { chatContent, setChatContent, registerClient, initTalk, sendMsg };
};

export default useChat;
