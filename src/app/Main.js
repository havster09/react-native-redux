import React from 'react';
import {Todo} from './Todo';
import TabView from 'react-native-scrollable-tab-view';
import {Reddit} from './Reddit';
import {ButtonReactBase} from './ButtonReactBase';
import {AnatomyExample} from './Anatomy';

/*
export const Main = () => (
 <TabView>
   <Todo tabLabel="Todo1"/>
   <Reddit tabLabel="Reddit"/>
   <ButtonReactBase tabLabel="ButtonReactBase"/>
 </TabView>
);*/

export const Main = () => (
 <AnatomyExample/>
);
