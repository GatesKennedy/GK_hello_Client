//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { logout } from '../Modules/User/rdx_axn/axn_auth';

//  STYLE
import { ContRow, ContCol, Row, Col, Btn } from '../../Design/Styled_Common';
import { AboutCont, AboutHead, AboutBody } from './Styled';
import { BodyCont } from '../../Design/Styled_aoe';

//  Asset
import { softwareObj, personalObj } from './AboutObj';
import Drop from '../../3_Class_____/Drop';
import TitleHeader from '../../0_GenComps_____/TitleHeader';

//  MAIN
const About = () => {
  //  STATE
  const [openState, setOpenState] = useState(0);
  const titleTxt1 = 'Hello, Friend...';
  const titleTxt2 = 'Software...';
  const titleTxt3 = 'Personal...';
  return (
    <AboutCont id='About-AboutCont' className='bg-gry2 txt-black'>
      <TitleHeader id='About-TitleHeader1' _txt={titleTxt1} />

      <TitleHeader id='About-TitleHeader2' _txt={titleTxt2} />
      <AboutBody id='About-AboutBody'>
        {softwareObj.map((item) => (
          <Drop
            key={item.rank}
            _item={item}
            _openState={openState}
            _setOpenState={setOpenState}
          />
        ))}
      </AboutBody>

      <TitleHeader id='About-TitleHeader3' _txt={titleTxt3} />
      <AboutBody id='About-AboutBody'>
        {personalObj.map((item) => (
          <Drop
            key={item.rank}
            _item={item}
            _openState={openState}
            _setOpenState={setOpenState}
          />
        ))}
      </AboutBody>
    </AboutCont>
  );
};

Drop.propTypes = {
  softwareObj: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default About;
