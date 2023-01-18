import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

import RegulationsScreen from '../screens/RegulationsScreen';
import App from '../App';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Regulation" component={RegulationsScreen} />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
  );
}
export default AuthStack;