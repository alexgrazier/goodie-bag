import React from 'react';
import { connect } from 'react-redux';
import candiesReducer, { getCandies } from '../reducers/candiesReducer';
import SingleCandy from './SingleCandy';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    console.log('PROPS--', this.props);
    if (this.props.loading) return <div>Loading...</div>;
    return (
      <div>
        <h1>ALL CANDIES</h1>
        <ul>
          {this.props.candies.map(candy => (
            <SingleCandy key={candy.id} id={candy.id} {...candy} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Mapping state to props, state :', state);
  return {
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

// {this.props.candies.map(candy => {
//   return (
//     <div key={candy.id}>
//       <h2>{candy.name}</h2>
//       <h3>{candy.description}</h3>
//       <p>Quantity: {candy.quantity}</p>
//       <img src={candy.imageUrl} />
//     </div>
//   );
// })}
