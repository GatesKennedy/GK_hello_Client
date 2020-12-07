import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import ImageItem from './ImageItem';
import InfoGroup from './InfoGroup';
//  STYLE
import { ItemCont, InfoCont } from './styled';
//  MAIN
const AboutItem = ({
  _dropType,
  _item,
  _item: { titleImgUrl, favRank },
  _openItem,
  _setOpenItem,
}) => {
  //  STATE
  const [openInfo, setOpenInfo] = useState(0);
  const [itemHeight, setItemHeight] = useState(null);
  const calcHeight = useCallback(() => {
    const fullHeight = document.getElementById(`AboutItem-ItemCont${favRank}`)
      .offsetHeight;
    console.log(`ItemHeight${favRank}: `, fullHeight);
    setItemHeight(fullHeight);
  }, [setItemHeight, favRank]);
  useEffect(() => {
    calcHeight();
  }, [calcHeight]);
  //  FXN
  const handleToggle = () => {
    _openItem === favRank ? _setOpenItem(0) : _setOpenItem(favRank);
  };

  return (
    <ItemCont
      id={`AboutItem-ItemCont${favRank}`}
      className={_openItem === favRank ? ' activeItem ' : ' inactiveItem '}
      style={{ height: `${itemHeight}px` }}
    >
      <ImageItem
        _openItem={_openItem}
        _handleToggle={handleToggle}
        favRank={favRank}
        titleImgUrl={titleImgUrl}
        imageSize={favRank === 1 ? 'large' : 'medium'}
      />

      <InfoGroup
        favRank={favRank}
        _itemHeight={itemHeight}
        _setItemHeight={setItemHeight}
        _handleToggle={handleToggle}
        __dropType={_dropType}
        __item={_item}
        __openItem={_openItem}
        __setOpenItem={_setOpenItem}
      />
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
