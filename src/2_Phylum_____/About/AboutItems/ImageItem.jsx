import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ImgContLrg, ImgContMed, ImgContSml } from './styled';
import { ImageLrg, ImageMed, ImageSml } from '../../../Design/Styled_aoe';

const ImageItem = ({ _openState, favRank, titleImgUrl, imageSize }) => {
  const ImageElement = (inputSize) => {
    switch (inputSize) {
      case 'large':
        return (
          <ImgContLrg
            id='DropMain-ImgCont'
            className={_openState === favRank && ' bg-gry2'}
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
  favRank: PropTypes.number.isRequired,
  titleImgUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string,
};

export default ImageItem;
