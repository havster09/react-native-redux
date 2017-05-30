import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/app/Store';
import {
  AppRegistry
} from 'react-native';
import {Main} from './src/app/Main';


export const store = configureStore();

const Root = () => (
 <Provider store={store}>
   <Main/>
 </Provider>
);

AppRegistry.registerComponent('Todo', () => Root);