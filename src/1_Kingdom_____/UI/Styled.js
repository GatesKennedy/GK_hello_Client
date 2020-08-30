import styled from 'styled-components';

//  MODAL
export const ModalCont = styled.div`
  position: fixed;
  z-index: 500;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding: 16px;

  border: 1px solid #ccc;
  outline: #f2f2f2 solid 4px;
  box-shadow: 1px 1px 1px black;
  box-sizing: border-box;

  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;
export const ModalMid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;

  width: 30vw;
  height: 32vh;
`;

export const ModalCtrl = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`;

//  GENERAL
export const Btn = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
  border: none;

  background: #f2f2f2;
  color: #0f0f0f;

  font-size: 14px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;

  outline: none;
  will-change: transform;
  transform: scale(1);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 22px;
    height: 22px;
  }
`;

export const NavCtrl = styled.div`
  flex: 0 1 8%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex: 0 1 14%;
  }
`;

export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  color: #0f0f0f;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  border: none;
  outline: none;
  will-change: transform;
  transform: scale(1);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 22px;
    height: 22px;
  }
`;

//  TRACK
export const PlayCtrl = styled.div`
  flex: 0 1 8%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex: 0 1 14%;
  }
`;

export const TrackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  color: #0f0f0f;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  border: none;
  outline: none;
  will-change: transform;
  transform: scale(1);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 22px;
    height: 22px;
  }
`;
