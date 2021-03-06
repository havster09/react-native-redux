import React, {Component} from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import {getTodos, createTodos, removeTodos} from './Actions';

import * as types from './Constants';
import {connect} from 'react-redux';
import {styles} from './styles';
import {TodoForm} from "./TodoForm";
import {Icon} from 'native-base';

class TodoComponent extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      todoId: 1,
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }

  componentWillMount() {
    this.props.getTodos();
  }

  handleChange(text) {
    this.setState(Object.assign({}, this.state, {newTodo: text}));
  }

  handleCreateTodo() {
    if (!this.state.newTodo) {
      return;
    }
    this.props.createTodo({
      name: this.state.newTodo
    });
    this.setState({newTodo: ''});
  }

  handleRemoveTodo(todo) {
    this.props.removeTodo(todo);
  }

  render() {
    const todos = this.props.todos.sort((a, b) => b.id - a.id).map((todo) => {
      return <View key={todo.id} style={styles.todosContainer}><Text style={styles.todos}
                                                                     onPress={this.handleRemoveTodo.bind(this, todo)}>{todo.name} {todo.id}</Text></View>
    });
    return (
     <View style={styles.linearGradient}>
       <Icon name='beer'/>
       <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
       <Image source={require('../assets/hqdefault.jpg')} style={styles.image}/>
       <TodoForm newTodo={this.state.newTodo} handleChange={this.handleChange}
                 handleCreateTodo={this.handleCreateTodo}/>
       <View>
         {todos}
       </View>
     </View>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapActionsToProps = (dispatch) => ({
  getTodos() {
    dispatch(getTodos())
  },
  createTodo(todo) {
    dispatch(createTodos(todo))
  },
  removeTodo(todo) {
    dispatch(removeTodos(todo))
  },
});

export const Todo = connect(mapStateToProps, mapActionsToProps)(TodoComponent);