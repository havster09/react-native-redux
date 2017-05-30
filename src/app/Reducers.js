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

const todos = (state = [], action) => {
  switch (action.type) {
    case types.GET_TODOS:
      return [...action.payload];
    case types.GET_TODOS_SUCCESS:
      return [...action.payload];
    case types.CREATE_TODO:
      return [action.payload, ...state];
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const memes = (state = [], action) => {
  switch (action.type) {
    case types.GET_MEMES_SUCCESS:
      return [...action.payload];
    case types.CREATE_MEME:
      return [action.payload, ...state];
    case types.REMOVE_MEME:
      return state.filter(meme => meme.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  reddit,
  points,
  memes
})