import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { Btn1 } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { ToggleCont } from './styled';

const ToggleItem = ({ isOpen, style, text, icon }) => {
  return (
    <div>
      <ToggleCont id='ToggleItem-ToggleCont' style={style}>
        <Btn1 id='ToggleItem-Btn1' className={isOpen && 'bg-gry2'}>
          {text} {icon}
        </Btn1>
      </ToggleCont>
    </div>
  );
};

ToggleItem.propTypes = {};

export default ToggleItem;
