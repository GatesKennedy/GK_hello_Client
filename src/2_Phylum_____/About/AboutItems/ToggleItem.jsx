import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { Btn1 } from '../../../Design/Styled_aoe';
import { ToggleCont } from './styled';

const ToggleItem = ({
  isOpen,
  isShown,
  type,
  _setToggleHeight,
  __handleToggle,
}) => {
  useEffect(() => {
    _setToggleHeight(
      document.getElementById('ToggleItem-ToggleCont').offsetHeight
    );
  }, [_setToggleHeight]);
  const togStyle = () =>
    isShown
      ? {
          opacity: 1,
          transition: 'opacity 1s ease-in-out 0.3s',
        }
      : {
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
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
      // className='pointer'
      onClick={() => __handleToggle()}
    >
      <Btn1 id='ToggleItem-Btn1' className={bgStyle()} style={togStyle}>
        {isOpen ? (
          <Fragment>
            less <RiArrowUpSLine />
          </Fragment>
        ) : (
          <Fragment>
            more <RiArrowDropDownLine />
          </Fragment>
        )}
      </Btn1>
    </ToggleCont>
  );
};

ToggleItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isShown: PropTypes.bool.isRequired,
  __handleToggle: PropTypes.func.isRequired,
};

export default ToggleItem;
