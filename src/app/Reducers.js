import {combineReducers} from 'redux';
import * as types from './Constants';

const reddit = (state = [{name:'demo'}], action) => {
  switch(action.type) {
    case types.FETCH_POSTS:
      return state;
    case types.ADD_POST:
      return [action.payload, ...state];
      case types.FETCH_POSTS_COMPLETE:
        return action.payload;
    default:
      return state;
  }
};

const points = (state = [0], action) => {
  switch(action.type) {
    case types.ADD_POINTS:
      return [parseInt(state) + action.payload];
      case types.SUBTRACT_POINTS:
      return parseInt(state) > 0?[parseInt(state) - action.payload]:[parseInt(state)];
    default:
      return state;
  }
};

export default combineReducers({
  reddit,
  points
})