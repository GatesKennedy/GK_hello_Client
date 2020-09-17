import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// REDUX
import PropTypes from 'prop-types';
//  HOOK

//  STYLE
import { ChatFormCont, ChatFormTxt, ChatFormBtn } from './Styled';

const ChatForm = ({ onSendMessage: pushMessage }) => {
  //  ~~ STATE ~~
  const [msg, setMsg] = useState('oh boy!');
  return (
    <ChatFormCont id='Talk-ChatFormCont' className='bg-gry4'>
      <ChatFormTxt
        id='Talk-ChatFormTxt'
        className='bg-gry5 txt-pale'
        type='text'
        name='ChatForm'
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            pushMessage({ msg });
            setMsg('');
          }
        }}
      />

      <ChatFormBtn
        id='Talk-ChatFormBtn'
        type='submit'
        name='chatSend'
        className='bg-pale txt-black'
        onClick={(e) => {
          e.preventDefault();
          pushMessage({ msg });
          setMsg('');
        }}
      >
        go
      </ChatFormBtn>
    </ChatFormCont>
  );
};

export default ChatForm;
