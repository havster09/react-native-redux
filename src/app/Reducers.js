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

const points = (state = [12], action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  reddit,
  points
})