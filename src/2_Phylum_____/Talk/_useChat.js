import { useEffect, useRef, useState } from 'react';
import sockClient from 'socket.io-client';
const { REACT_APP_API_URL } = process.env;

const useChat = () => {
  const sockRef = useRef();

  useEffect(() => {
    sockRef.current = sockClient(REACT_APP_API_URL);

    return () => {
      sockRef.current.disconnect();
    };
  }, []);

  const sendMessage = ({ message }) => {
    sockRef.current.emit('message', { message });
  };

  return { messages, sendMessage };
};

export default useChat;
