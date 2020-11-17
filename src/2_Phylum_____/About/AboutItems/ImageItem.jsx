import React from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ImgCont } from './styled';
import { ImageLrg, ImageMed, ImageSml } from '../../../Design/Styled_aoe';

const ImageItem = ({ _openState, favRank, titleImgUrl, imageSize }) => {
  const ImageElement = (inputSize) => {
    console.log('FXN > ENTER > ImageElement() > inputSize = ', inputSize);
    switch (inputSize) {
      case 'large':
        console.log('ImageElement() > large');
        return (
          <ImageLrg
            id='DropMain-ImageLrg'
            src={titleImgUrl}
            alt='oops... bad link'
          />
        );
      case 'small':
        console.log('ImageElement() > small');
        return (
          <ImageSml
            id='DropMain-ImageSml'
            src={titleImgUrl}
            alt='oops... bad link'
          />
        );

      default:
        //  Medium Default
        console.log('ImageElement() > Default... medium');
        return (
          <ImageMed
            id='DropMain-ImageMed'
            src={titleImgUrl}
            alt='oops... bad link'
          />
        );
    }
  };
  //====================
  return (
    <ImgCont
      id='DropMain-ImgCont'
      className={_openState === favRank && ' bg-gry2'}
    >
      {ImageElement(imageSize)}
    </ImgCont>
  );
};

ImageItem.propTypes = {
  _openState: PropTypes.bool.isRequired,
  favRank: PropTypes.number.isRequired,
  titleImgUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string,
};

export default ImageItem;
