import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { Btn1 } from '../../../Design/Styled_aoe';
import { ToggleCont } from './styled';

const ToggleItem = ({ isOpen, isMore, id, type, handleToggle }) => {
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
  isMore: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleItem;
