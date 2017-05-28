import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts:[]
    };
  }

  componentWillMount() {
    window.fetch('https://www.reddit.com/.json', {
      Accept: 'application/json'
    }).then(response => response.json())
     .then((response) => {
      this.setState(Object.assign({},this.state,{posts:response.data.children}))
     })
  }

  render() {
    const posts = this.state.posts
     .filter((post, i)=>i<3)
     .map((post, i)=>{
      return <Text key={i}>{post.data.title}</Text>
    });
    return (
     <View>
       <Text>Reddit</Text>
       {posts}
     </View>
    )
  }
}



