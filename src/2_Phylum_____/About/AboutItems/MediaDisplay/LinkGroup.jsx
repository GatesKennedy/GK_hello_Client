import React from 'react';
import { Link } from 'react-router-dom';
//  !!!   import { connect } from 'socket.io-client';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../../1_Kingdom_____/Alert/axn_alert';
//  STYLE
import { Tooltip } from '@material-ui/core';
import { ImageLogo, ImageInfo } from '../../../../Design/Styled_aoe';
import { MediaRow, MediaItem, MediaTitle } from './styled';
//  UTILS
import { openNewTab } from '../../../../utils/Routing';

const LinkGroup = ({ _links, setAlert }) => {
  function handleClick(url) {
    if (url === 'void')
      return setAlert('sorry, that link is private or unavailable', 'warn');
    else openNewTab(url);
  }

  return (
    <MediaRow id='LinkGroup-MediaRow'>
      {_links.length > 0 &&
        _links.map(({ id, type, title, img, url }) =>
          type === 'link' ? (
            <MediaItem
              id='LinkGroup-MediaItem'
              key={id}
              onClick={() => handleClick(url)}
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setAlert })(LinkGroup);
// export default LinkGroup;
