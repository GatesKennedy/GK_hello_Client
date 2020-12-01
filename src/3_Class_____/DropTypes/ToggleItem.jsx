import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { Btn1 } from '../../Design/Styled_aoe';
import { ToggleCont } from './styled';

const ToggleItem = ({ isOpen, isShown, __handleToggle }) => {
  console.log('isOpen: ', isOpen);
  console.log('isShown: ', isShown);
  const togStyle = () =>
    !isShown
      ? {
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        }
      : {
          opacity: 1,
          transition: 'opacity 1s ease-in-out 0.3s',
        };

  return (
    <ToggleCont
      id='ToggleItem-ToggleCont'
      style={togStyle()}
      className='pointer'
      onClick={() => __handleToggle()}
    >
      <Btn1
        id='ToggleItem-Btn1'
        className={isOpen && 'bg-gry2'}
        style={togStyle}
      >
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
