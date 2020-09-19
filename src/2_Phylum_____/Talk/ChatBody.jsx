import React from 'react';
//  STYLE
import { ChatDispInner } from './Styled';

const ChatBody = ({ chatContent, userId }) => {
  return (
    <ChatDispInner id='Talk-ChatDispInner' className='bg-gry5'>
      <ul>
        {Array.isArray(chatContent) ? (
          chatContent.map((msg, index) => (
            <li
              className={
                'msg-chat ' +
                (String(msg.send_id) === userId ? ' msg-self' : ' msg-them')
              }
              key={index}
              // !!!
              // key={msg.id}
            >
              {msg.body.text}
            </li>
          ))
        ) : (
          <p>hold up...</p>
        )}
      </ul>
    </ChatDispInner>
  );
};

export default ChatBody;
