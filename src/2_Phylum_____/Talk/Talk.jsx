//  React
import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert, removeAlerts } from '../../1_Kingdom_____/Alert/axn_alert';
import { setModal } from '../../1_Kingdom_____/UI/axn_ui';
import { loadChat, postTalkHistory } from './axn_talk';
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
  removeAlerts,
  loadChat,
  postTalkHistory,
  user,
  talk: { access, chat, loading },
  auth: { isAuthenticated, role },
}) => {
  const userObj = user;
  const { id: userId, name: userName, role: userRole } = user;
  const [talkNow, setTalkNow] = useState();
  const [talkId, setTalkId] = useState();
  const [roomName, setRoomName] = useState();

  //  ~~ HOOKS ~~
  const {
    chatContent,
    setChatContent,
    registerClient,
    initTalk,
    sendMsg,
  } = useChat(talkId);
  //----------
  useEffect(() => {
    removeAlerts();
    if (!isAuthenticated) {
      setAlert('You gotta log in for that...', 'warn');
      setModal(true, 'auth', "You'll need to log in for GK_Talk");
    } else if (chat.length > 0 && access.length > 0) {
      setAlert('Welcome friend...', 'good');
      console.log(`$$$    Talk > ENTER > LOAD GOOD`);
      setTalkId(access[0].id);
      setChatContent(chat);
      if (user.role !== 'admin') setRoomName('Conor');
    } else {
      console.log(`$$$    Talk > ENTER > LOAD FAIL`);
      setAlert('aww... you new?', 'success');
    }
  }, [chat]);
  //----------
  useEffect(() => {
    if (chatContent && talkId) {
      const newTalk = chatContent.find((chat) => chat.talk_id === talkId);
      newTalk && setTalkNow(newTalk.msgobj);
    }
  }, [chatContent, talkId]);
  //----------
  useEffect(() => {
    registerClient(userObj, talkId);
  }, [talkId]);

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
    const newName = access
      .find((room) => room.id === roomId)
      .members.find((member) => member.id !== userId).name;
    setRoomName(newName);
    setTalkId(roomId);
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
                  className={talkRoom.id === talkId ? 'bg-act2 txt-white' : ''}
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
              <div className='txt-they'>{roomName}</div>
              <div className='txt-pale'>.: GK_Talk :.</div>
              <div className='txt-mine'>
                {isAuthenticated ? userName : 'Guest'}
              </div>
            </ChatHead>
            <ChatDisp id='Talk-ChatDisp' className='bg-gry4'>
              <ChatBody chatContent={talkNow} userId={userId} />
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
});

export default connect(mapStateToProps, {
  setAlert,
  removeAlerts,
  setModal,
  loadChat,
  postTalkHistory,
})(Talk);
