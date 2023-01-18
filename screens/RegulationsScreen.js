import React, {useEffect, useState}from 'react';
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

import AsyncStorage from '@react-native-async-storage/async-storage';

function RegulationsScreen({ navigation }) {
  const [accepted, setAccepted] = useState(false);

  const test = async () => {
    try {
      await AsyncStorage.setItem('keepLoggedIn', true);
      console.log("USTAWIONO NA TRUE");
    } catch (error) {
      console.log("Error @setItem: ", error)
    }
  };

  return (
    <View style={styles.sectionContainer}>
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionTitle}>Regulamin</Text>
    </View>
    <View style={styles.sectionDescription}>
      <Text style={styles.sectionTitle}>1. BLBLBLB</Text>
      <Text style={styles.sectionTitle}>2. BLBLBLB</Text>
    </View>
    <View style={styles.sectionFooter}>
      <Button
        title="Accept"
        onPress={() => {
          test();
          setAccepted(true);
          navigation.navigate('App');
        }}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    width: '100%',
    alignItems: 'flex-start', 
    justifyContent: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '300',
  },
  sectionFooter: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '100',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default RegulationsScreen;
