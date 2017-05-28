import {createStore, combineReducers} from 'redux';
import rootReducer from './Reducers';

export const Store = createStore(rootReducer);