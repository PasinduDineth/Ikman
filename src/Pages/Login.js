import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,Text,
  ImageBackground,Image,StatusBar, ScrollView, KeyboardAvoidingView, AsyncStorage, Keyboard
} from 'react-native'
var _ = require('lodash');
import VxTextbox from '../component/VxTextbox'
import VxButton from '../component/VxButton'
import { scale, moderateScale, verticalScale} from '../../Scaling';
import { TextField } from 'react-native-material-textfield';



export default class Login extends Component<{}> {
    static navigationOptions = {
        header: null,
        };

        constructor(props) {
          super(props)
        }

        componentDidMount() {
          StatusBar.setHidden(true);
        //const dispatchConnected = isConnected => this.props.dispatch(setIsConnected(isConnected));
        // NetInfo.isConnected.fetch().then().done(() => {
        //   NetInfo.isConnected.addEventListener('change', dispatchConnected);
        // });
      }


  render() {
    return (
      <ImageBackground source={require('../../src/img/bg7.jpg')} style={styles.container}>
        <View style={styles.bodyContainer}>
            <Text style={styles.welcome}>Kamu</Text>
            <Text style={styles.instructions}>Online Reataurant</Text>

        <View style={styles.container_input}>
            <TextField
               textColor='white'
               tintColor='white'
               baseColor='white'
               label='Username'
               labelFontSize={moderateScale(15, 0.5)}
               Color='rgba(239, 108, 0, 0.90)'
               fontSize={moderateScale(15, 0.5)}
               //secureTextEntry={true}
               //autoCapitalize={'none'}
               //returnKeyType={'go'}
               //autoCorrect={false}
               //onChangeText={(password) => this.password(password)}
               //value={phone}
               //onChangeText={ (phone) => this.setState({ phone }) }
             /> 
             <TextField
               textColor='white'
               tintColor='white'
               baseColor='white'
               label='Password'
               labelFontSize={moderateScale(15, 0.5)}
               Color='rgba(239, 108, 0, 0.90)'
               fontSize={moderateScale(15, 0.5)}
               secureTextEntry={true}
               //autoCapitalize={'none'}
               //returnKeyType={'go'}
               //autoCorrect={false}
               //onChangeText={(password) => this.password(password)}
               //value={phone}
               //onChangeText={ (phone) => this.setState({ phone }) }
             />        

            <VxButton BtnText='Login' onPress= {() => this.props.navigation.navigate('Main')} />
        </View>      

        </View>

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize:moderateScale(60, 0.5),
    textAlign: 'center',
    color:"white"
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    fontSize: moderateScale(25, 0.5)
  },login_logo_container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_logo:{
    width: moderateScale(320,1.0),
    height:moderateScale(120,0.30),
    marginBottom:10
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_input: {
    marginTop: scale(2),
  },
});
