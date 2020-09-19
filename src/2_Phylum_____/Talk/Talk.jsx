//  React
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import { setTalkNow } from './axn_talk';
//  SOCKET
import useChat from './_useChat';

//  STYLE
import {
  TalkCont,
  RoomMenu,
  RoomCont,
  ChatCont,
  ChatHead,
  ChatDisp,
  RoomBtn,
} from './Styled';
//  Asset
import ChatBody from './ChatBody';
import ChatForm from './ChatForm';

//==========================================================
const Talk = ({
  setModal,
  setAlert,
  setTalkNow,
  profile,
  talk: { access, chat, talkNow, loading },
  auth: { isAuthenticated, role },
}) => {
  //  ~~ STATE ~~
  const [talkObj, setTalkObj] = useState(talkNow);
  //  ~~ HOOKS ~~
  const { hookMsgs, sendMsg } = useChat();

  useEffect(() => {
    console.log(`$$$    setTalkObj()`);
    setTalkObj(talkNow);
  }, [talkNow]);
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'notice');
      setModal(true, 'auth', "You'll need to log in for GK_Talk");
    }
  }, []);
  return (
    <TalkCont id='Talk-TalkCont' className='bg-eerie'>
      <ChatCont id='Talk-ChatCont' className='bg-blk1'>
        <RoomMenu>
          <ChatHead>Rooms</ChatHead>
          {access.map((talkRoom) => (
            <RoomBtn key={talkRoom.id} className=''>
              {talkRoom.id.substring(0, 8)}
            </RoomBtn>
          ))}
        </RoomMenu>{' '}
        <RoomCont>
          <ChatHead id='Talk-ChatHead'>
            <div className=''>Conor</div>
            <div className='txt-pale'>.: GK_Talk :.</div>
            <div>{isAuthenticated ? profile.name : 'Guest'}</div>
          </ChatHead>
          <ChatDisp id='Talk-ChatDisp' className='bg-gry4'>
            <ChatBody chatContent={talkObj.msgobj} userId={profile.id} />
          </ChatDisp>
          <ChatForm
            onSendMessage={(msg) => {
              sendMsg({ msg });
            }}
          />
        </RoomCont>
      </ChatCont>
    </TalkCont>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
  talk: state.talk,
});

export default connect(mapStateToProps, { setAlert, setModal, setTalkNow })(
  Talk
);
