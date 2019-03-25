import axios from 'axios';

//ACTION TYPES
const GETTING_CANDIES = 'GETTING_CANDIES';
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';
const GOT_SINGLE_CANDY_FROM_SERVER = 'GOT_SINGLE_CANDY_FROM_SERVER';
const ADD_CANDY = 'ADD_CANDY';

//ACTION CREATORS

//Loading/GettingCandies action creator
const gettingCandies = () => ({
  type: GETTING_CANDIES,
});
//All candies action creator
const gotCandies = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies,
});

//Single Candy Action Creator
const gotCandy = candy => ({
  type: GOT_SINGLE_CANDY_FROM_SERVER,
  candy,
});

const addCandy = newCandy => ({
  type: ADD_CANDY,
  newCandy,
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

export const getCandy = candyId => {
  //the thunk
  return async dispatch => {
    try {
      // dispatch(gettingCandies()); //if using loading Jess' way
      const { data } = await axios.get(`/api/candies/${candyId}`);
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
  //if we use separate action creator for getting candies here
  //loading: false
};

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GETTING_CANDIES:
    //   return { ...state, loading: true };
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    //with Jess: add loading false
    case GOT_SINGLE_CANDY_FROM_SERVER:
      return { ...state, candy: action.candy, loading: false };
    case ADD_CANDY:
      return { ...state, candy: { ...state.candy } };
    default:
      return state;
  }
};

export default candiesReducer;
