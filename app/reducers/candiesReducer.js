import axios from 'axios';

//ACTION TYPES
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';
const GOT_SINGLE_CANDY_FROM_SERVER = 'GOT_SINGLE_CANDY_FROM_SERVER';

//ACTION CREATORS
//All candies
const gotCandies = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies,
});

//Single Candy
const gotCandy = candy => ({
  type: GOT_SINGLE_CANDY_FROM_SERVER,
  candy,
});

//THUNK CREATORS
export const getCandies = () => {
  //the thunk
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(gotCandies(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCandy = () => {
  //the thunk
  return async dispatch => {
    try {
      const { data } = await axios.get(`api/candies/${candyId}`);
      dispatch(gotCandy(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {
  candies: [],
  candy: {},
  loading: true,
};

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    case GOT_SINGLE_CANDY_FROM_SERVER:
      return { ...state, candy: action.candy };
    default:
      return state;
  }
};

export default candiesReducer;
