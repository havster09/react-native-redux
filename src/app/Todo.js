import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import {styles} from './styles';
import {Fancy} from "./Fancy";
import {Reddit} from "./Reddit";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount() {
    window.fetch('http://10.0.0.48:1337/todos', {
      headers: {'Accept': 'application/json'}
    }).then((response)=> {
      return response.json();
    })
     .then(data => {
       this.setState(Object.assign({},this.state,{
         todos:[...data]
       }))
     });
  }

  handleChange(text) {
    this.setState(Object.assign({}, this.state, {newTodo: text}));
  }

  handlePress() {
    if (!this.state.newTodo) {
      return;
    }

    window.fetch('http://10.0.0.48:1337/todos', {
      method:'POST',
      body: JSON.stringify({name:this.state.newTodo}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response)=> response.json())
     .then((data)=> {
      console.log(data);
       this.setState(Object.assign({}, this.state, {
         todos: [{id: data.id, name:this.state.newTodo}, ...this.state.todos],
         newTodo: ''
       }));
     })
  }

  handleRemoveTodo(i) {
    window.fetch(`http://10.0.0.48:1337/todos/${i}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
     .then((data) => {
      console.log(data);
       const todos = this.state.todos.filter((todo) => todo.id !== i);
       this.setState({
         todos
       })
     });
  }

  render() {
    const todos = this.state.todos.sort((a,b)=> b.id-a.id).map((todo, i) => {
      return <View key={todo.id}  style={styles.todosContainer}><Text style={styles.todos} onPress={this.handleRemoveTodo.bind(this, todo.id)}>{todo.name} {todo.id}</Text></View>
    });
    return (
       <View style={styles.container}>
         <Fancy/>
         <Text style={styles.welcome}>
           adb reverse tcp:8081 tcp:8081
           echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
         </Text>
         <TextInput style={styles.textInput} value={this.state.newTodo} onChangeText={this.handleChange}/>
         <TouchableOpacity style={styles.button} onPress={this.handlePress}>
           <Text>Board Tap</Text>
         </TouchableOpacity>
         <View>
           {todos}
         </View>
       </View>
    )
  }
}
