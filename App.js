import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Footer from "./src/components/footer/index";
import AFrame from './src/screens/aFrame/index';
import CollectionProducts from './src/screens/collectionProducts/index';
import EnlargeImage from './src/screens/enlargeImage/index';
import HomeScreen from './src/screens/home/index';
import LogIn from './src/screens/logIn/index';
import RefinedSearch from './src/screens/refinedSearch/index';
import SingleProductList from './src/screens/singleProductList/index';
import SingleProductSlider from './src/screens/singleProductSlider/index';

var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

var headerHeight = (window.width >= 375 ? 55 : 48 );

let navigationOptionsHeaderBlank = ({ navigation }) => {
  return {
      header : null,
    } 
}

let navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: '#323232',
      borderBottomColor: '#323232',
      borderBottomWidth: 0,
      paddingTop: 2,
      paddingBottom: 2,
      height: headerHeight,
      justifyContent: 'center',
      width: window.width,
    },
    headerTintColor: '#fff',
  }
}

export default class App extends React.Component {

  render() {
    return (
      <View style ={styles.container}>
        <SimpleApp />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { 
    screen : HomeScreen,
    navigationOptions: navigationOptionsHeaderBlank,
  },
  AFrame: { 
    screen : AFrame,
    navigationOptions: navigationOptions,
  },
  LogIn: { 
    screen : LogIn,
    navigationOptions: navigationOptionsHeaderBlank,
  },
  CollectionProducts: { 
    screen : CollectionProducts,
    navigationOptions: navigationOptions,
  },
  EnlargeImage: {
    screen: EnlargeImage,
    navigationOptions: navigationOptionsHeaderBlank,
  },
  RefinedSearch: { 
    screen : RefinedSearch,
    navigationOptions: navigationOptions,
  },
  SingleProductList: { 
    screen : SingleProductList,
    navigationOptions: navigationOptions,
  },
  SingleProductSlider: { 
    screen : SingleProductSlider,
    navigationOptions: navigationOptions,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
