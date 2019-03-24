import axios from 'axios';

//ACTION TYPES
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';

//ACTION CREATOR
const gotCandies = candies => ({
  type: GOT_CANDIES_FROM_SERVER,
  candies,
});

//THUNK CREATOR
export const getCandies = () => {
  //the thunk
  return async dispatch => {
    const { data } = await axios.get('/api/candies');
    dispatch(gotCandies(data));
  };
};

const initialState = {
  candies: [],
  loading: true,
};

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default candiesReducer;
