import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as types from './Constants';
import {connect} from 'react-redux';

class RedditComponent extends Component {
  constructor() {
    super();
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleAddPoints = this.handleAddPoints.bind(this);
    this.handleSubtractPoints = this.handleSubtractPoints.bind(this);
  }

  /*componentWillMount() {
    window.fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    }).then(response => response.json())
     .then((response) => {
      this.setState(Object.assign({},this.state,{posts:response.data.children}))
     })
  }*/

  handleAddPost() {
    this.props.addRedditPost();
  }

  handleAddPoints() {
    this.props.addPoints(2);
  }

  handleSubtractPoints() {
    this.props.subtractPoints(2);
  }

  render() {
    return (
     <View>
       <TouchableOpacity onPress={this.handleAddPoints}>
         <Text>
           2 points
         </Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={this.handleSubtractPoints}>
         <Text>
           - 2 points
         </Text>
       </TouchableOpacity>

       <Text>{this.props.points} points</Text>
       <Text>Reddit</Text>
       <TouchableOpacity onPress={this.handleAddPost}>
         <Text>
           ADD POST
         </Text>
       </TouchableOpacity>
       {this.props.posts.map((post, i) => <Text key={i}>{post.name}</Text>)}
     </View>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.reddit,
  points:state.points
});

const mapActionsToProps = (dispatch) => ({
  addRedditPost(post={name:'blah'}) {
    dispatch({type:types.ADD_POST, payload:post})
  },
  addPoints(points=2) {
    dispatch({type:types.ADD_POINTS, payload:points})
  },
  subtractPoints(points=2) {
    dispatch({type:types.SUBTRACT_POINTS, payload:points})
  }
});

export const Reddit = connect(mapStateToProps, mapActionsToProps)(RedditComponent);

