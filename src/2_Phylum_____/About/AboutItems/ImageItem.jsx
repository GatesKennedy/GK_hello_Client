import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//  STYLE
import { ImgContLrg, ImgContMed, ImgContSml } from './styled';
import { ImageLrg, ImageMed, ImageSml } from '../../../Design/Styled_aoe';

const ImageItem = ({ imageSize, isOpen, titleImgUrl, __handleSelect }) => {
  const ImageElement = (inputSize) => {
    switch (inputSize) {
      case 'large':
        return (
          <ImgContLrg
            id='DropMain-ImgCont'
            className={
              isOpen ? ' bg-gry2 shadow-less pointer' : ' shadow-more pointer'
            }
            onClick={() => __handleSelect()}
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
            className={isOpen && ' bg-gry2'}
            onClick={() => __handleSelect()}
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
            className={
              isOpen ? ' bg-gry2 shadow-less pointer' : ' shadow-more pointer'
            }
            onClick={() => __handleSelect()}
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
  __handleSelect: PropTypes.func.isRequired,
  titleImgUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string,
};

export default ImageItem;
