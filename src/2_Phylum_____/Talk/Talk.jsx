//  React
import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../1_Kingdom_____/Alert/axn_alert';
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
  loadChat,
  postTalkHistory,
  user,
  talk: { access, chat, loading },
  auth: { isAuthenticated, role },
}) => {
  const { id: userId, name: userName, role: userRole } = user; // !!! REDUCE
  const [talkId, setTalkId] = useState(access[0].id);
  const [roomName, setRoomName] = useState();

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
    registerClient(userId, talkId);
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
    const newMsgObj = chat.find((room) => room.talk_id === roomId).msgobj;
    console.log('FXN    handleRoom() > newRoom: ', newMsgObj);
    setChatContent(newMsgObj);
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

  postTalkHistory,
})(Talk);
