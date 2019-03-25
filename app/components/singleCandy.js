import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SingleCandy = props => {
  console.log('props.match', props.match);
  const { id, name, description, quantity, imageUrl } = props;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <p>Quantity: {quantity}</p>
      <img src={imageUrl} />
    </div>
  );
};

export default connect(
  null,
  null
)(SingleCandy);
