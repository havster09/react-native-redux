import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

export const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:5
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  box: {
    backgroundColor:'pink',
    width:100,
    height:100,
    position:'absolute',
    top:10,
    borderRadius:50
  },
  text: {
    color: 'white',
    fontSize:34,
    fontWeight:'bold',
    fontFamily:'Helvetica'
  },
  red: {
    backgroundColor: 'red'
  },
  todosContainer: {
    width:screenWidth,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    padding:10,
    backgroundColor:'violet',
    justifyContent: 'center',
  },
  todos: {
    color:'white'
  },
  button: {
    backgroundColor:'white',
    borderColor:'grey',
    borderWidth:1,
    padding: 3,
    margin:3
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: '90%'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
