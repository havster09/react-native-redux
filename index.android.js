import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/app/Store';
import {
  AppRegistry
} from 'react-native';
import {Todo} from "./src/app/Todo";


const Main = () => (
 <Provider store={Store}>
   <Todo/>
 </Provider>
);

AppRegistry.registerComponent('Todo', () => Main);