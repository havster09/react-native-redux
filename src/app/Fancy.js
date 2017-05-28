import React, {Component} from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';

import {styles} from './styles';

export class Fancy extends Component {
  constructor() {
    super();
  }

  render() {
    return (
       <View style={styles.container}>
         <Text style={styles.text}>{Platform.OS}</Text>
         <View style={styles.box}>
           <Text>
             ba
           </Text>
         </View>
       </View>
      )
  }
}



