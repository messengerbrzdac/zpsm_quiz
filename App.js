import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import TestScreen from './screens/TestScreen';

const Drawer = createDrawerNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName = "Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Result" component={ResultScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
