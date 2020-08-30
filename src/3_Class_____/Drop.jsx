import React from 'react';
import PropTypes from 'prop-types';

const Drop = ({ _item }) => {
  return (
    <div>
      <h2>Title: {_item.title}</h2>
      <p>Tech: {_item.tech}</p>
      <p>{_item.summary}</p>
      <text>{_item.story}</text>
    </div>
  );
};

Drop.propTypes = {};

export default Drop;
