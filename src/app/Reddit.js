import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class _Reddit extends Component {
  constructor() {
    super();
  }

  /*componentWillMount() {
    window.fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    }).then(response => response.json())
     .then((response) => {
      this.setState(Object.assign({},this.state,{posts:response.data.children}))
     })
  }*/

  render() {
    return (
     <View>
       <Text>Reddit</Text>
       {this.props.posts.map((post, i) => <Text key={i}>{post.name}</Text>)}
     </View>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.reddit
});

export const Reddit = connect(mapStateToProps, null)(_Reddit);

