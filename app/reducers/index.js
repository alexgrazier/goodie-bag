import candiesReducer from './candiesReducer';
import singleCandyReducer from './singleCandyReducer';
import { combineReducers } from 'redux';

const rootReducer = candiesReducer;

export default rootReducer;

//CombinedReducer (with dummy date in singleCandyReducer)
// const rootReducer = combineReducers({
//   candies: candiesReducer,
//   singleCandy: singleCandyReducer,
// });

//Initial Code
//All that's needed in a reducer
// const initialState = {};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
