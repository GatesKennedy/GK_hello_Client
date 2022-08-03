import React from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ImageItem from './ImageItem';
//  STYLE
import {
  TitleCont,
  StatsCont,
  TitleName,
  TitleDetail,
  TechList,
  TechItem,
  SubTitle,
} from './styled';

const ItemTitle = ({
  _openItem,
  _handleSelect,
  favRank,
  titleImgUrl,
  __item: { id, title, tech, summary, story, media, links },
}) => {
  return (
    <TitleCont id={`ItemTitle-TitleCont${id}`} className=' pointer'>
      <ImageItem
        isOpen={favRank === _openItem}
        titleImgUrl={titleImgUrl}
        imageSize={favRank === 1 ? 'large' : 'medium'}
        __handleSelect={_handleSelect}
      />
      <StatsCont id={`ItemTitle-StatsCont${id}`}>
        <TitleName
          id={`InfoGroup-TitleName${id}`}
          onClick={() => _handleSelect()}
        >
          {title}
        </TitleName>
        <TitleDetail
          id={`InfoGroup-TitleDetail${id}`}
          onClick={() => _handleSelect()}
        >
          <SubTitle>{favRank === 1 ? 'Titles:' : 'Tech:'}</SubTitle>
          <TechList id='InfoGroup-TechList'>
            {tech.length > 0 &&
              tech.map((item, index) => (
                <TechItem
                  id='InfoGroup-TechItem'
                  key={index}
                  className={_openItem !== favRank ? ' bg-gry1' : ' bg-gry2'}
                >
                  {item}
                </TechItem>
              ))}
          </TechList>
        </TitleDetail>
      </StatsCont>
    </TitleCont>
  );
};

ItemTitle.propTypes = {};

export default ItemTitle;
