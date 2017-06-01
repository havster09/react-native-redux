import React, {Component} from 'react';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, ActionSheet} from 'native-base';
import {Text} from 'react-native';

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];

export class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
     <Container>
       <Header>
         <Left>
           <Button transparent>
             <Icon name='menu'/>
           </Button>
         </Left>
         <Body>
         <Title>Header</Title>
         </Body>
         <Right />
       </Header>
       <Content>
         <Content padder>
           <Text>{this.state.clicked}</Text>
           <Button onPress={()=> ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: 3,
              destructiveButtonIndex: 4,
              title: 'Testing ActionSheet'
            },
            (buttonIndex) => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
           )}><Text>Actionsheet</Text></Button>
         </Content>
       </Content>
       <Footer>
         <FooterTab>
           <Button full>
             <Text>Footer</Text>
           </Button>
         </FooterTab>
       </Footer>
     </Container>
    );
  }
}
