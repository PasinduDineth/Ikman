import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { Image,ImageBackground,Keyboard } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
// Our custom files and classes import
import { StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import Text from './src/component/Text';
import Navbar from './src/component/Navbar';
import SideMenu from './src/component/SideMenu';
import SideMenuDrawer from './src/component/SideMenuDrawer';
import CategoryBlock from './src/component/CategoryBlock';

import Main from './src/Pages/Main'
import Login from './src/Pages/Login'
import BasicFlatList from './src/Pages/BasicFlatList'


export default class App extends Component<> {
  static navigationOptions = {
    header: null,
    };

    constructor(props) {
      Keyboard.dismiss();
        super(props)
          this.state = {
            initialRoute: 'BasicFlatList'
          }
    }
  render() {
      const MainNavigator = StackNavigator({
        Login: { screen: Login },
        Main: { screen: Main},
        BasicFlatList: { screen: BasicFlatList} 
      },
      {initialRouteName:this.state.initialRoute})
    return <MainNavigator />      

  }
}

