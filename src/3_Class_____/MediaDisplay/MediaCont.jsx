import React from 'react';
import PropTypes from 'prop-types';
// STYLE
import { ImageSml } from '../../Design/Styled_aoe';
import { MediaRow, MediaItem, MediaTitle } from './styled';

const MediaCont = ({ _media, _title }) => {
  console.log(`MEDIA CHK: ${_title} media length: `, _media.length);
  return (
    <MediaRow>
      {_media.length > 0 &&
        _media.map(
          ({ id, type, title, img, url }) =>
            type === 'link' && (
              <MediaItem key={id}>
                <ImageSml src={img} />
                <MediaTitle>{title}</MediaTitle>
              </MediaItem>
            )
        )}
    </MediaRow>
  );
};

MediaCont.propTypes = {};

export default MediaCont;
