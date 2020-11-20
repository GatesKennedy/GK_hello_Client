import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { Btn1 } from '../../Design/Styled_aoe';
import { RiArrowDropDownLine, RiArrowUpSLine } from 'react-icons/ri';
import { ToggleCont } from './styled';
import { useEffect } from 'react';
import { useState } from 'react';

const ToggleItem = ({ isOpen, style, type }) => {
  // const [text, setText] = useState(null);
  // const [icon, setIcon] = useState(null);
  // useEffect(() => {
  //   if (type === 'less') {
  //     setText('less');
  //     setIcon(<RiArrowUpSLine />);
  //   } else {
  //     setText('more');
  //     setIcon(<RiArrowDropDownLine />);
  //   }
  // }, [type]);
  return (
    <ToggleCont id='ToggleItem-ToggleCont' style={style}>
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

ToggleItem.propTypes = {};

export default ToggleItem;
