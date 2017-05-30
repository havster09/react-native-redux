import React, {Component} from 'react';
import * as types from './Constants';
import {connect} from 'react-redux';
import {Container, Content, Button, Text, Card, CardItem, Icon, Right} from 'native-base';

import {getMemes,createMeme} from './Actions';


class ButtonReactBaseComponent extends Component {
  constructor(props) {
    super(props);
    this.handleCreateLightMeme = this.handleCreateLightMeme.bind(this);
    this.handleCreatePrimaryMeme = this.handleCreatePrimaryMeme.bind(this);
  }

  componentWillMount() {
    this.props.getMemes();
  }

  handleCreateLightMeme() {
    this.props.createMeme({
      name:'wan sum fuk'
    })
  }

  handleCreatePrimaryMeme() {
    this.props.createMeme({
      name:'lemme smash'
    })
  }

  render() {
    return (
     <Container>
       <Content>
         <Button onPress={this.handleCreateLightMeme} light><Text> Light </Text></Button>
         <Button onPress={this.handleCreatePrimaryMeme} primary block><Text> Primary </Text></Button>
         <Button success><Text> Success </Text></Button>
         <Button info><Text> Info </Text></Button>
         <Button warning><Text> Warning </Text></Button>
         <Button danger><Text> Danger </Text></Button>
         <Button dark><Text> Dark </Text></Button>
       </Content>

       <Content>
         {this.props.memes.map((meme, i)=><Text key={meme.id}>{meme.name}</Text>)}
       </Content>

       <Container>
         <Content>
           <Card>
             <CardItem>
               <Icon active name="logo-googleplus" />
               <Text>Google Plus</Text>
               <Right>
                 <Icon name="arrow-forward" />
               </Right>
             </CardItem>
           </Card>
         </Content>
       </Container>
     </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  memes: state.memes
});

const mapActionsToProps = (dispatch) => ({
  getMemes() {
    dispatch(getMemes())
  },
  createMeme(meme) {
    dispatch(createMeme(meme))
  }
});

export const ButtonReactBase = connect(mapStateToProps, mapActionsToProps)(ButtonReactBaseComponent);

