//  React
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import { setTalkNow, loadChat, updateTalkHistory } from './axn_talk';
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
  loadChat,
  updateTalkHistory,
  profile,
  talk: { access, chat, talkNow, loading },
  auth: { isAuthenticated, role },
}) => {
  //  UTIL
  const checkReload = async (rdxState, hookState) => {
    console.log(`UTL    checkReload > ENTER`);
    console.log(`UTL    checkReload > rdxState: `, rdxState);
    console.log(`UTL    checkReload > hookState: `, hookState);
    if (hookState.length !== rdxState.length && Array.isArray(talkNow.msgobj)) {
      console.log(`$$$    initHookMsgs()`);
      initHookMsgs(talkNow.msgobj);
    }
  };
  //  ~~ HOOKS ~~
  const { hookMsgs, initHookMsgs, sendMsg } = useChat();
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'notice');
      setModal(true, 'auth', "You'll need to log in for GK_Talk");
    } else {
      console.log(`$$$  Load Talk > loadChat()`);
      if (hookMsgs.length < 1) loadChat();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(`$$$    initHookMsgs()`);
    if (Array.isArray(talkNow.msgobj) && hookMsgs.length < 1)
      // initHookMsgs(talkNow.msgobj);
      checkReload(talkNow.msgobj, hookMsgs);
  }, [talkNow]);

  //  FXN
  const handleSend = (type, text) => {
    console.log(`FXN    handleSend() > hookMsgs.length: `, hookMsgs.length);
    console.log(`FXN    handleSend() > profile.id: `, profile.id);
    const newMsg = {
      body: { type: type, text: text },
      send_id: String(profile.id),
      seen: false,
      //  !!!
      // date_time: 'void'
    };
    console.log(`FXN    handleSend() > newMsg: `, newMsg);
    sendMsg(newMsg);
    updateTalkHistory(talkNow.talk_id, newMsg);
  };
  return (
    <TalkCont id='Talk-TalkCont' className='bg-eerie'>
      <ChatCont id='Talk-ChatCont' className='bg-blk1'>
        {profile.role === 'admin' && (
          <RoomMenu>
            <ChatHead>Rooms</ChatHead>
            {access.map((talkRoom) => (
              <RoomBtn key={talkRoom.id} className=''>
                {talkRoom.id.substring(0, 8)}
              </RoomBtn>
            ))}
          </RoomMenu>
        )}
        <RoomCont>
          <ChatHead id='Talk-ChatHead'>
            <div className=''>Conor</div>
            <div className='txt-pale'>.: GK_Talk :.</div>
            <div>{isAuthenticated ? profile.name : 'Guest'}</div>
          </ChatHead>
          <ChatDisp id='Talk-ChatDisp' className='bg-gry4'>
            <ChatBody chatContent={hookMsgs} userId={profile.id} />
            {/* <ChatBody chatContent={talkObj.msgobj} userId={profile.id} /> */}
          </ChatDisp>
          <ChatForm onSendMessage={(type, text) => handleSend(type, text)} />
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

export default connect(mapStateToProps, {
  setAlert,
  setModal,
  loadChat,
  setTalkNow,
  updateTalkHistory,
})(Talk);
