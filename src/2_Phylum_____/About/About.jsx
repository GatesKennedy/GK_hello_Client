//  React
import React, { useState, useEffect } from 'react';
//  REDUX
import PropTypes from 'prop-types';

//  STYLE
import { AboutCont, AboutBody } from './Styled';

//  Asset
import { introObj, softwareObj, personalObj } from './AboutObj';
import AboutItem from './AboutItems/AboutItem';
import TitleHeader from '../../0_GenComps_____/TitleHeader';

//  MAIN
const About = () => {
  //  STATE
  const [openItem, setOpenItem] = useState(0);
  const titleTxt1 = 'Hello, Friend...';
  const titleTxt2 = 'Software...';
  const titleTxt3 = 'Personal...';
  //  EFFECT
  useEffect(() => {
    console.log('%c--------', 'color: goldenrod');

    console.log('About     > openItem:    ', openItem);
  }, [openItem]);

  return (
    <AboutCont id='About-AboutCont' className='bg-gry2 txt-black'>
      {/* Hello */}
      <TitleHeader id='About-TitleHeader1' _txt={titleTxt1} />
      <AboutBody id='About-AboutBody'>
        {introObj.map((item) => (
          <AboutItem
            key={item.favRank}
            dropType='add'
            _item={item}
            _openItem={openItem}
            _setOpenItem={setOpenItem}
          />
        ))}
      </AboutBody>

      {/* Software */}
      <TitleHeader id='About-TitleHeader2' _txt={titleTxt2} />
      <AboutBody id='About-AboutBody'>
        {softwareObj.map((item) => (
          <AboutItem
            key={item.favRank}
            dropType='switch'
            _item={item}
            _openItem={openItem}
            _setOpenItem={setOpenItem}
          />
        ))}
      </AboutBody>
      {/* Personal */}
      <TitleHeader id='About-TitleHeader3' _txt={titleTxt3} />
      <AboutBody id='About-AboutBody'>
        {personalObj.map((item) => (
          <AboutItem
            key={item.favRank}
            dropType='switch'
            _item={item}
            _openItem={openItem}
            _setOpenItem={setOpenItem}
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
  //   media: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
  // personalObj: PropTypes.shape({
  //   rank: PropTypes.number,
  //   title: PropTypes.string,
  //   tech: PropTypes.arrayOf(PropTypes.string),
  //   summary: PropTypes.string,
  //   story: PropTypes.arrayOf(PropTypes.string),
  //   titleImgUrl: PropTypes.string,
  //   media: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
};

export default About;
