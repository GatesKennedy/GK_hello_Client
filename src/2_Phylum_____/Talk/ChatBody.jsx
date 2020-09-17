import React from 'react';
//  STYLE
import { ChatDispInner } from './Styled';
const ChatBody = ({ chatContent }) => {
  return (
    <ChatDispInner id='Talk-ChatDispInner' className='bg-gry5'>
      <ul>
        {chatContent.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </ChatDispInner>
  );
};

export default ChatBody;
