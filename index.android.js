import React from 'react';
import {
  AppRegistry
} from 'react-native';
import {Todo} from "./src/app/Todo";


const Main = () => (<Todo/>);

AppRegistry.registerComponent('Todo', () => Main);