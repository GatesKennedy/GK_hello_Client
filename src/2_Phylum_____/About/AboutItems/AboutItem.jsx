import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import TitleGroup from './TitleGroup';
import InfoGroup from './InfoGroup';
import LinkGroup from './MediaDisplay/LinkGroup';
//  STYLE
import { ItemCont, InfoGroupCont } from './styled';
//  MAIN
const AboutItem = ({
  _dropType,
  _item,
  _item: { titleImgUrl, favRank, id, links },
  _openItem,
  _setOpenItem,
}) => {
  //  STATE

  const [topId, setTopId] = useState(id);
  const [storyHeight, setStoryHeight] = useState(0);
  //  EFFECT
  useEffect(() => {
    console.log('%c------------------', 'color: darkseagreen');
    console.log(`AboutItem > Effect Log
    topId:        ${topId}
    _openItem:    ${_openItem}
    `);
  }, [topId, _openItem]);

  //  FXN
  const handleSelect = () => {
    console.log('%chandleSelect() > ', 'color: darkseagreen');
    _openItem === topId ? _setOpenItem(0) : _setOpenItem(topId);
    console.log(`handleSelect()
    item.id:      ${topId}
    topId:        ${topId}
    _openItem:    ${_openItem}
    `);
  };

  return (
    <ItemCont
      id={`AboutItem-ItemCont${topId}`}
      className={_openItem === favRank ? ' activeItem ' : ' inactiveItem '}
    >
      <TitleGroup
        __item={_item}
        _openItem={_openItem}
        _handleSelect={handleSelect}
        favRank={favRank}
        titleImgUrl={titleImgUrl}
      />
      <InfoGroupCont id={`AboutItem-InfoGroupCont${_item.id}`}>
        <InfoGroup
          topId={topId}
          parentId={_openItem}
          toggleParent={handleSelect}
          setParentHeight={setStoryHeight}
          item={_item}
        />
      </InfoGroupCont>
      <LinkGroup id='AboutItem-LinkGroup' _links={links} />
    </ItemCont>
  );
};

AboutItem.propTypes = {
  _item: PropTypes.shape({
    titleImgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    favRank: PropTypes.number.isRequired,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired,
    story: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  _openItem: PropTypes.number.isRequired,
  _setOpenItem: PropTypes.func.isRequired,
};

export default AboutItem;
