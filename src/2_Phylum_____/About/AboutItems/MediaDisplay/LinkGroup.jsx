import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { ImageLogo, ImageInfo } from '../../../../Design/Styled_aoe';
import { MediaRow, MediaItem, MediaTitle } from './styled';
//  UTILS
import { openNewTab } from '../../../../utils/Routing';

const LinkGroup = ({ _links }) => {
  return (
    <MediaRow id='LinkGroup-MediaRow'>
      {_links.length > 0 &&
        _links.map(({ id, type, title, img, url }) =>
          type === 'link' ? (
            <MediaItem
              id='LinkGroup-MediaItem'
              key={id}
              onClick={() => openNewTab(url)}
            >
              <Tooltip title={title} placement='bottom'>
                <ImageLogo id='LinkGroup-ImageLogo' src={img} />
              </Tooltip>
            </MediaItem>
          ) : (
            type === 'img' && (
              <MediaItem id='LinkGroup-MediaItem' key={id}>
                <Tooltip title={title} placement='bottom'>
                  <ImageInfo id='LinkGroup-ImageLogo' src={img} />
                </Tooltip>
              </MediaItem>
            )
          )
        )}
    </MediaRow>
  );
};

LinkGroup.propTypes = {
  _links: PropTypes.array.isRequired,
};

export default LinkGroup;
