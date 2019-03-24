import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SingleCandy = props => {
  console.log('props.match', props.match);
  const { id, name, description, quantity, imageUrl } = props;
  return (
    <li>
      <Link to={`candies/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{description}</h3>
      <p>Quantity: {quantity}</p>
      <img src={imageUrl} />
    </li>
  );
};

export default connect(
  null,
  null
)(SingleCandy);
