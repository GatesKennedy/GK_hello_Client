import React, { Fragment, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { Btn1 } from '../../../Design/Styled_aoe';
import { ToggleCont } from './styled';
import styled from 'styled-components';

const BtnContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
//==================
const ToggleItem = ({
  isOpen,
  isMore,
  id,
  type,
  setParentHeight,
  handleToggle,
}) => {
  useLayoutEffect(() => {
    const toggleHeight = document.getElementById(`ToggleItem-ToggleCont`)
      .offsetHeight;
    setParentHeight(toggleHeight + 20);
  }, [setParentHeight]);

  const togStyle = () =>
    isMore
      ? {
          opacity: 1,
          transition: 'all 0.5s ease-in-out ',
        }
      : {
          opacity: 0,
          transition: 'all 0.3s ease-in-out',
        };
  const bgStyle = () => {
    if (isOpen) {
      return type === 'sub' ? ' bg-gry2 left-red' : ' bg-gry2';
    } else {
      return type === 'sub' ? ' bg-gry2 left-blue' : '';
    }
  };
  return (
    <ToggleCont
      id='ToggleItem-ToggleCont'
      style={togStyle()}
      onClick={() => handleToggle(id)}
    >
      <Btn1 id='ToggleItem-Btn1' className={bgStyle()} style={togStyle()}>
        {isOpen ? (
          <BtnContent id='ToggleItem-BtnContent'>
            less <RiArrowUpSLine />
          </BtnContent>
        ) : (
          <BtnContent id='ToggleItem-BtnContent'>
            more <RiArrowDropDownLine />
          </BtnContent>
        )}
      </Btn1>
    </ToggleCont>
  );
};

ToggleItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMore: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleItem;
