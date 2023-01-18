import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import TestScreen from '../screens/TestScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Result" component={ResultScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
  );
}
export default AppStack;