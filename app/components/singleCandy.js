import React from 'react';
import { connect } from 'react-redux';
import { getCandy } from '../reducers/candiesReducer';

class SingleCandy extends React.Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    const candyId = this.props.match.params.id;
    this.props.getCandy(candyId);
  }

  increase() {
    // preventDefault();
    this.props.candy.quantity = this.props.candy.quantity + 1;
  }

  render() {
    console.log('SINGLECANDY PROPS', this.props);
    const { id, name, description, quantity, imageUrl } = this.props.candy;
    if (this.props.loading) return <div>Loading...</div>;
    return (
      <div className="candy">
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>Quantity: {quantity}</p>
        <button onClick={() => this.increase()} id="increase">
          Increase Quantity
        </button>
        <button id="decrease">Decrease Quantity</button>
        <img src={imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candy: state.candy,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandy: candyId => dispatch(getCandy(candyId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
