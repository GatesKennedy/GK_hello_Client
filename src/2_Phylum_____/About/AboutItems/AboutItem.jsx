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
  const [childList, updateChildList] = useState([{ id: 0, height: 0 }]);

  //  FXN
  const handleSelect = (localId) => {
    _openItem === localId ? _setOpenItem(0) : _setOpenItem(localId);
  };

  function setChildList(list) {
    updateChildList(list);
  }

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
          childList={childList}
          updateChildList={setChildList}
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
