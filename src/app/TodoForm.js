import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {styles} from './styles';

export const TodoForm = (props) => (
 <View>
   <TextInput style={styles.textInput} value={props.newTodo} onChangeText={props.handleChange}/>
   <TouchableOpacity style={styles.button} onPress={props.handleCreateTodo}>
     <Text>Board Tap</Text>
   </TouchableOpacity>
 </View>
);