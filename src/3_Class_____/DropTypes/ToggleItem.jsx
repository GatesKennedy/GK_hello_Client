import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { Btn1 } from '../../Design/Styled_aoe';
import { ToggleCont } from './styled';

const ToggleItem = ({ isOpen }) => {
  const togStyle = () =>
    !isOpen
      ? {
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        }
      : {
          opacity: 1,
          transition: 'opacity 1s ease-in-out 0.4s',
        };

  return (
    <ToggleCont id='ToggleItem-ToggleCont' style={togStyle}>
      <Btn1 id='ToggleItem-Btn1' className={isOpen && 'bg-gry2'}>
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
};

export default ToggleItem;
