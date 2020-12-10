import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ImgContLrg, ImgContMed, ImgContSml } from './styled';
import { ImageLrg, ImageMed, ImageSml } from '../../../Design/Styled_aoe';

const ImageItem = ({
  _openState,
  __handleToggle,
  favRank,
  titleImgUrl,
  imageSize,
}) => {
  const ImageElement = (inputSize) => {
    switch (inputSize) {
      case 'large':
        return (
          <ImgContLrg
            id='DropMain-ImgCont'
            className={_openState === favRank ? ' bg-gry2 pointer' : 'pointer'}
            onClick={() => __handleToggle()}
          >
            <ImageLrg
              id='DropMain-ImageLrg'
              src={titleImgUrl}
              alt='oops... bad link'
            />
          </ImgContLrg>
        );
      case 'small':
        return (
          <ImgContSml
            id='DropMain-ImgCont'
            className={_openState === favRank && ' bg-gry2'}
            onClick={() => __handleToggle()}
          >
            <ImageSml
              id='DropMain-ImageSml'
              src={titleImgUrl}
              alt='oops... bad link'
            />
          </ImgContSml>
        );

      default:
        //  Medium Default
        return (
          <ImgContMed
            id='DropMain-ImgCont'
            className={_openState === favRank && ' bg-gry2'}
            onClick={() => __handleToggle()}
          >
            <ImageMed
              id='DropMain-ImageMed'
              src={titleImgUrl}
              alt='oops... bad link'
            />
          </ImgContMed>
        );
    }
  };
  //====================
  return <Fragment>{ImageElement(imageSize)}</Fragment>;
};

ImageItem.propTypes = {
  _openState: PropTypes.number.isRequired,
  __handleToggle: PropTypes.func.isRequired,
  favRank: PropTypes.number.isRequired,
  titleImgUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string,
};

export default ImageItem;
