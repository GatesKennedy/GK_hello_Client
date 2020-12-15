import React from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ImageItem from './ImageItem';
//  STYLE
import {
  TitleCont,
  StatsCont,
  ItemTitle,
  ItemTech,
  TechList,
  TechItem,
  SubTitle,
} from './styled';

const TitleGroup = ({
  _openItem,
  _handleSelect,
  favRank,
  titleImgUrl,
  __item: { id, title, tech, summary, story, media, links },
}) => {
  return (
    <TitleCont id={`TitleGroup-TitleCont${id}`} className=' pointer'>
      <ImageItem
        isOpen={favRank === _openItem}
        titleImgUrl={titleImgUrl}
        imageSize={favRank === 1 ? 'large' : 'medium'}
        __handleSelect={_handleSelect}
      />
      <StatsCont id={`TitleGroup-StatsCont${id}`}>
        <ItemTitle
          id={`InfoGroup-ItemTitle${id}`}
          onClick={() => _handleSelect()}
        >
          {title}
        </ItemTitle>
        <ItemTech
          id={`InfoGroup-ItemTech${id}`}
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
        </ItemTech>
      </StatsCont>
    </TitleCont>
  );
};

TitleGroup.propTypes = {};

export default TitleGroup;
