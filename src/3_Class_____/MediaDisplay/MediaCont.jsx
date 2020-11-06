import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { ImageLogo } from '../../Design/Styled_aoe';
import { MediaRow, MediaItem, MediaTitle } from './styled';
//  UTILS
import { openNewTab } from '../../utils/Routing';

const MediaCont = ({ _media, _title }) => {
  console.log(`MEDIA CHK: ${_title} media length: `, _media.length);
  return (
    <MediaRow>
      {_media.length > 0 &&
        _media.map(
          ({ id, type, title, img, url }) =>
            type === 'link' && (
              <MediaItem key={id} onClick={() => openNewTab(url)}>
                <Tooltip title={title} placement='bottom-start'>
                  <ImageLogo src={img} />
                  {/* <MediaTitle>{title}</MediaTitle> */}
                </Tooltip>
              </MediaItem>
            )
        )}
    </MediaRow>
  );
};

MediaCont.propTypes = {};

export default MediaCont;
