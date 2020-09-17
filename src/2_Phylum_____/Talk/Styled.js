import styled from 'styled-components';

export const TalkCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  align-content: center;
  align-items: center;

  height: calc(100vh - 60px);
  width: 100vw;
  min-height: 375px;
  min-width: 375px;
`;
export const ChatCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  align-content: center;
  align-items: center;

  width: 50%;
  height: 80%;
  min-width: 375px;
  min-height: 375px;

  padding: 8px 12px;
  border-radius: 18px;
  /* box-shadow: 1px 2px 2px #dddddd; */
`;
export const ChatHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  padding-bottom: 4px;
  font-size: calc(4px + 2vmin);
`;
export const ChatDisp = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 96%;

  border-radius: 8px 8px 0px 0px;
  padding: 4px;
`;

//  Chat Messages
export const ChatDispInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;

  border-radius: 6px 6px 0px 0px;
  padding: 4px;
  width: 100%;
  height: 100%;
`;
//  Chat Forms
export const ChatFormCont = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24%;
  max-height: 72px;

  border-radius: 0px 0px 8px 8px;
  margin: 4px;
  padding: 4px;
  font-size: calc(4px + 2vmin);
`;
export const ChatFormTxt = styled.input`
  display: flex;
  flex-direction: row;
  align-content: flex-start;

  width: calc(100% - 76px);
  height: 100%;

  border-style: none;
  border-radius: 0px 0px 0px 6px;
  padding: 4px;
  font-size: calc(8px + 1vmin);
`;
export const ChatFormBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 72px;
  height: calc(100% - 1px);

  border-radius: 0px 0px 6px 0px;
  margin: 0px 0px 0px 4px;

  font-size: calc(9px + 1.5vmin);
`;
