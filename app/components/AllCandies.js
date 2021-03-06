import React from 'react';
import { connect } from 'react-redux';
import candiesReducer, { getCandies } from '../reducers/candiesReducer';
import SingleCandy from './SingleCandy';
import { Link, Route } from 'react-router-dom';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    // console.log('PROPS--', this.props);
    // if (this.props.loading) return <div>Loading...</div>;
    return (
      <div>
        <h1>ALL CANDIES</h1>
        {this.props.candies.map(candy => {
          return (
            <div key={candy.id}>
              <Link to={`candies/${candy.id}`}>
                <h2>{candy.name}</h2>
              </Link>
              <h3>{candy.description}</h3>
              <p>Quantity: {candy.quantity}</p>
              <img src={candy.imageUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Mapping state to props, state :', state);
  return {
    //loading: state.loading,
    candies: state.candies,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('Mapping dispatch to props');
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
