import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,StatusBar
} from 'react-native';
import { Image,ImageBackground } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Main extends Component<> {
    static navigationOptions = {
        header: null,
        };

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon style={{ color: "#FFF" }} name='ios-menu-outline'/>
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button transparent>
          <Icon name='ios-search-outline' style={{ color: "#FFF",fontWeight:'900' }} />
        </Button>
        <Button transparent>
          <Icon name='ios-cart' style={{ color: "#FFF" }} />
        </Button>
      </Right>
    );

    return(
      <View style={{flex:1}}>
        <View>
            <StatusBar hidden={true} />
        </View>
            <ImageBackground 
                source={require("../../src/img/bg.png")}
                style={styles.backgroundImage}
            >
            <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
            <Container>
                <Navbar 
                left={left} 
                right={right} 
                style={styles.headerText} 
                title="My Store" 
                titleStyle={{color:'#FFF'}}
                />
                
            </Container>
            </SideMenuDrawer>
        </ImageBackground>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  headerText:{
    color: '#fff'
  },
  navTitle:{
    color: '#fff'
  }
});
