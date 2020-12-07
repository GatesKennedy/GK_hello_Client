import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { ImageLogo, ImageInfo } from '../../../../Design/Styled_aoe';
import { MediaRow, MediaItem, MediaTitle } from './styled';
//  UTILS
import { openNewTab } from '../../../../utils/Routing';

const MediaCont = ({ _media }) => {
  return (
    <MediaRow
      id='MediaCont-MediaRow'
      style={{ width: _media.length > 0 ? '40%' : '0px' }}
    >
      {_media.length > 0 &&
        _media.map(({ id, type, title, img, url }) =>
          type === 'link' ? (
            <MediaItem
              id='MediaCont-MediaItem'
              key={id}
              onClick={() => openNewTab(url)}
            >
              <Tooltip title={title} placement='bottom'>
                <ImageLogo id='MediaCont-ImageLogo' src={img} />
              </Tooltip>
            </MediaItem>
          ) : (
            type === 'img' && (
              <MediaItem id='MediaCont-MediaItem' key={id}>
                <Tooltip title={title} placement='bottom'>
                  <ImageInfo id='MediaCont-ImageLogo' src={img} />
                </Tooltip>
              </MediaItem>
            )
          )
        )}
    </MediaRow>
  );
};

MediaCont.propTypes = {};

export default MediaCont;
