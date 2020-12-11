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
  _item: { titleImgUrl, favRank, links },
  _openItem,
  _setOpenItem,
}) => {
  //  STATE
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [topId, setTopId] = useState(favRank);
  //  EFFECT
  useEffect(() => {
    _openItem === topId ? setIsTopOpen(true) : setIsTopOpen(false);
  }, [topId, _openItem]);
  //  FXN
  const handleSelect = () => {
    _openItem === topId ? _setOpenItem(0) : _setOpenItem(topId);
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
          _favRank={favRank}
          _handleSelect={handleSelect}
          _isTopOpen={isTopOpen}
          _setIsTopOpen={setIsTopOpen}
          _topId={topId}
          __dropType={_dropType}
          __item={_item}
          __openItem={_openItem}
          __setOpenItem={_setOpenItem}
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
