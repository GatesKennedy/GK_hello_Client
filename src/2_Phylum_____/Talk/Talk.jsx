//  React
import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import { setTalkNow, loadChat, postTalkHistory } from './axn_talk';
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
import BackDrop from '../../1_Kingdom_____/UI/Backdrop';
import { REGISTER_ERROR } from '../../Redux/axn_types';

//==========================================================
const Talk = ({
  setModal,
  setAlert,
  setTalkNow,
  loadChat,
  postTalkHistory,
  user,
  talk: { access, chat, talkNow, loading },
  auth: { isAuthenticated, role },
}) => {
  const talkId = talkNow.talk_id;
  const { id: userId, name: userName, role: userRole } = user;
  const [roomName, setRoomName] = useState(talkId);

  //  UTIL
  const checkReload = (rdxState, hookState) => {
    console.log(`UTL    checkReload > ENTER`);
    console.log(`UTL    checkReload > rdxState: `, rdxState);
    console.log(`UTL    checkReload > hookState: `, hookState);
    if (hookState.length !== rdxState.length && Array.isArray(talkNow.msgobj)) {
      console.log(`UTL    initTalkConnect()`);
      initTalk(userId, talkNow.talk_id);
    }
  };
  //  ~~ HOOKS ~~
  useEffect(() => {
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'notice');
      setModal(true, 'auth', "You'll need to log in for GK_Talk");
    } else {
      if (chatContent.length < 1) {
        console.log(`$$$    Talk > loadChat()`);
        loadChat();
      }
    }
  }, []);
  //---------
  useEffect(() => {
    setChatContent(talkNow.msgobj);
  }, [talkNow]);
  //----------
  const {
    chatContent,
    setChatContent,
    registerClient,
    initTalk,
    sendMsg,
  } = useChat(talkId);
  //----------
  useEffect(() => {
    registerClient(userId, talkNow.talk_id);
  }, [talkNow.talk_id]);

  //  FXN
  const handleSend = (type, text) => {
    const msgObj = {
      body: { type: type, text: text },
      talkId: talkId,
      send_id: userId,
      seen: false,
    };
    console.log(`FXN    handleSend() > newMsg: `, msgObj);
    sendMsg(msgObj);
    postTalkHistory(talkId, msgObj);
  };

  const handleRoomChange = (roomId) => {
    const newRoom = chat.find((room) => room.talk_id === roomId);
    console.log('FXN    handleRoom() > newRoom: ', newRoom);
    setTalkNow(newRoom);
    const newName = access
      .find((room) => room.id === roomId)
      .members.find((member) => member.id !== userId).name;
    setRoomName(newName);
  };
  return (
    <Fragment>
      {!isAuthenticated && <BackDrop />}
      <TalkCont id='Talk-TalkCont' className='bg-eerie'>
        <ChatCont id='Talk-ChatCont' className='bg-blk1'>
          {userRole === 'admin' && (
            <RoomMenu>
              <ChatHead>Rooms</ChatHead>
              {access.map((talkRoom) => (
                <RoomBtn
                  key={talkRoom.id}
                  onClick={() => handleRoomChange(talkRoom.id)}
                  className={talkRoom.id === talkId ? 'bg-gry3' : ''}
                >
                  {/* {talkRoom.id.substring(0, 8)} */}
                  {talkRoom.members
                    .filter((member) => member.id !== userId)
                    .map((member) => `${member.name}`)}
                </RoomBtn>
              ))}
            </RoomMenu>
          )}
          <RoomCont>
            <ChatHead id='Talk-ChatHead'>
              <div className=''>{roomName}</div>
              <div className='txt-pale'>.: GK_Talk :.</div>
              <div>{isAuthenticated ? userName : 'Guest'}</div>
            </ChatHead>
            <ChatDisp id='Talk-ChatDisp' className='bg-gry4'>
              <ChatBody chatContent={chatContent} userId={userId} />
              {/* <ChatBody chatContent={talkObj.msgobj} userId={userId} /> */}
            </ChatDisp>
            <ChatForm onSendMessage={(type, text) => handleSend(type, text)} />
          </RoomCont>
        </ChatCont>
      </TalkCont>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
  talk: state.talk,
  // talkNow: state.talk.talkNow,
});

export default connect(mapStateToProps, {
  setAlert,
  setModal,
  loadChat,
  setTalkNow,
  postTalkHistory,
})(Talk);
