/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { Image,ImageBackground } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
// Our custom files and classes import
import Text from './component/Text';
import Navbar from './component/Navbar';
import SideMenu from './component/SideMenu';
import SideMenuDrawer from './component/SideMenuDrawer';
import CategoryBlock from './component/CategoryBlock';


export default class App extends Component<> {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon style={{ color: "#DC2F2F" }} name='ios-menu-outline'/>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button transparent>
          <Icon name='ios-search-outline' style={{ color: "#DC2F2F" }} />
        </Button>
        <Button transparent>
          <Icon name='ios-cart' style={{ color: "#DC2F2F" }} />
        </Button>
      </Right>
    );

    return(
      
      <ImageBackground source={require("./src/img/bg.jpg")}
                  style={styles.backgroundImage}>
                  <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="My Store" />
            <Image source={require('./bg.jpg')} style={{width: 40, height: 45}}/>
          </Container>
          </SideMenuDrawer>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
 
}
});
