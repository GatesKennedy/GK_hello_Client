//  React
import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//  STYLE
import { AboutCont, AboutBody, AboutIntro, BodyCont } from './Styled';
import { ParaMed } from '../../Design/Styled_aoe';

//  Asset
import { introObj, helloObj, softwareObj, personalObj } from './AboutObj';
import DropMain from '../../3_Class_____/DropMain/DropMain';
import DropProject from '../../3_Class_____/DropProject/DropProject';
import TitleHeader from '../../0_GenComps_____/TitleHeader';

//  MAIN
const About = () => {
  //  STATE
  const [openState, setOpenState] = useState(0);
  const titleTxt0 = 'Intro:';
  const titleTxt1 = 'Hello, Friend...';
  const titleTxt2 = 'Software...';
  const titleTxt3 = 'Personal...';
  useEffect(() => {
    console.log(`$$$ openState = `, openState);
  }, [openState]);
  return (
    <AboutCont id='About-AboutCont' className='bg-gry2 txt-black'>
      {/* Hello */}
      <TitleHeader id='About-TitleHeader1' _txt={titleTxt1} />
      <AboutIntro id='About-AboutIntro'>
        {introObj.map((item) => (
          <DropMain
            key={item.favRank}
            _item={item}
            _openState={openState}
            _setOpenState={setOpenState}
          />
        ))}
      </AboutIntro>

      {/* Software */}
      <TitleHeader id='About-TitleHeader2' _txt={titleTxt2} />
      <AboutBody id='About-AboutBody'>
        {softwareObj.map((item) => (
          <DropProject
            key={item.favRank}
            _item={item}
            _openState={openState}
            _setOpenState={setOpenState}
          />
        ))}
      </AboutBody>
      {/* Personal */}
      <TitleHeader id='About-TitleHeader3' _txt={titleTxt3} />
      <AboutBody id='About-AboutBody'>
        {personalObj.map((item) => (
          <DropProject
            key={item.favRank}
            _item={item}
            _openState={openState}
            _setOpenState={setOpenState}
          />
        ))}
      </AboutBody>
    </AboutCont>
  );
};

About.propTypes = {
  // introObj: PropTypes.arrayOf(PropTypes.string).isRequired,
  // softwareObj: PropTypes.shape({
  //   rank: PropTypes.number,
  //   title: PropTypes.string,
  //   tech: PropTypes.arrayOf(PropTypes.string),
  //   summary: PropTypes.string,
  //   story: PropTypes.arrayOf(PropTypes.string),
  //   titleImgUrl: PropTypes.string,
  //   storyImgUrls: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
  // personalObj: PropTypes.shape({
  //   rank: PropTypes.number,
  //   title: PropTypes.string,
  //   tech: PropTypes.arrayOf(PropTypes.string),
  //   summary: PropTypes.string,
  //   story: PropTypes.arrayOf(PropTypes.string),
  //   titleImgUrl: PropTypes.string,
  //   storyImgUrls: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
};

export default About;
