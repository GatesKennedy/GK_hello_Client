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

  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 375px;
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
  height: 64%;
  min-width: 375px;
  min-height: 375px;

  padding: 12px;
  border-radius: 12px;
`;
export const ChatHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 86%;
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
  width: 86%;
  height: 72%;
  padding: 4px;
`;
export const ChatDispInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-items: center;
  align-self: center;
  align-items: center;
  padding: 4px;
  width: 100%;
  height: 100%;
`;

export const ChatFormCont = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 86%;
  height: 16%;
  margin: 4px;
  padding: 4px;
  font-size: calc(4px + 2vmin);
`;
export const ChatFormTxt = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 89%;
  height: 100%;
  margin: 8px 0px;
  padding: 4px;
  font-size: calc(8px + 1vmin);
`;
export const ChatFormBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 11%;
  height: 92%;
  margin: 10px 0px 10px 4px;
  padding: 4px;
  font-size: calc(9px + 1.5vmin);
`;
