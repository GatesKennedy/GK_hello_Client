//  React
import React, { useState } from 'react';
//  REDUX
import PropTypes from 'prop-types';
//  STYLE
import { AboutCont, AboutBody } from './Styled';

//  Asset
import { introObj, softwareObj, personalObj } from './AboutObj';
import AboutItem from './AboutItems/AboutItem';
import AboutHeader from './AboutItems/AboutHeader';

//  MAIN
const About = () => {
  //  STATE
  const [openItem, setOpenItem] = useState(0);
  const titleTxt1 = 'Hello, Friend...';
  const titleTxt2 = 'Software...';
  const titleTxt3 = 'Personal...';

  return (
    <AboutCont id='About-AboutCont' className='bg-gry2 txt-black'>
      {/* Hello */}
      <AboutHeader id='About-AboutHeader1' _txt={titleTxt1} />
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
      <AboutHeader id='About-AboutHeader2' _txt={titleTxt2} />
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
      <AboutHeader id='About-AboutHeader3' _txt={titleTxt3} />
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
  // introObj: PropTypes.shape({
  //   rank: PropTypes.number,
  //   title: PropTypes.string,
  //   tech: PropTypes.arrayOf(PropTypes.string),
  //   summary: PropTypes.string,
  //   story: PropTypes.arrayOf(PropTypes.string),
  //   titleImgUrl: PropTypes.string,
  //   media: PropTypes.arrayOf(PropTypes.string),
  // }).isRequired,
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
