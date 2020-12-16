import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { ImageLogo, ImageInfo } from '../../../../Design/Styled_aoe';
import {
  MediaRow,
  MediaCol,
  MediaItem,
  MediaItemInfo,
  MediaTitle,
} from './styled';
//  UTILS
import { openNewTab } from '../../../../utils/Routing';

const MediaCont = ({ _media }) => {
  return (
    <Fragment>
      {_media.length > 0 &&
        _media.map(({ id, type, title, img, url }) =>
          type === 'link' ? (
            <MediaRow
              key={id}
              id='MediaCont-MediaRow'
              style={{ width: _media.length > 0 ? '40%' : '0px' }}
            >
              <MediaItem
                id='MediaCont-MediaItem'
                key={id}
                onClick={() => openNewTab(url)}
              >
                <Tooltip title={title} placement='bottom'>
                  <ImageLogo id='MediaCont-ImageLogo' src={img} />
                </Tooltip>
              </MediaItem>
            </MediaRow>
          ) : (
            type === 'img' && (
              <MediaCol key={id}>
                <MediaItemInfo id='MediaCont-MediaItemInfo' key={id}>
                  <Tooltip title={title} placement='bottom'>
                    <ImageInfo id='MediaCont-ImageInfo' src={img} />
                  </Tooltip>
                </MediaItemInfo>
              </MediaCol>
            )
          )
        )}
    </Fragment>
  );
};

MediaCont.propTypes = {};

export default MediaCont;
