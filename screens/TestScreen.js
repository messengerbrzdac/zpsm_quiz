import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const tasks = [{
  question: "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
  answers: [
  {
  content: "LUCJUSZ CYNNA",
  isCorrect: true
  },
  {
  content: "JULIUSZ CEZAR",
  isCorrect: false
  },
  {
  content: "LUCJUSZ MURENA",
  isCorrect: false
  },
  {
  content: "MAREK KRASSUS",
  isCorrect: false
  }
  ],
  duration: 1
  },{
  question: "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
  answers: [
  {
  content: "LUCJUSZ CYNNA",
  isCorrect: true
  },
  {
  content: "JULIUSZ CEZAR",
  isCorrect: false
  },
  {
  content: "LUCJUSZ MURENA",
  isCorrect: false
  },
  {
  content: "MAREK KRASSUS",
  isCorrect: false
  }
  ],
  duration: 1
  }
];

const Item = ({ item , checked, setChecked}) => (
  
  <View style={styles.item}>
    <Text style={styles.title}>
      {item.question}
    </Text>
    <Text>
      Odpowiedzi:
    </Text>
    <Text>
      {item.answers[0].content}
    </Text>
    <RadioButton
      value="first"
      status={checked === 'first' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('first')}
    />
    <Text>
      {item.answers[1].content}
    </Text>
    <RadioButton
      value="second"
      status={checked === 'second' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('second')}
    />
    <Text>
      {item.answers[2].content}
    </Text>
    <RadioButton
      value="third"
      status={checked === 'third' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('third')}
    />
    <Text>
      {item.answers[3].content}
    </Text>
    <RadioButton
      value="fourth"
      status={checked === 'fourth' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('fourth')}
    />
  </View>
);

function TestScreen({ navigation }) {
  const [checked, setChecked] = useState('first');
  const renderItem = ({ item }) => (
    <Item item={item} checked={checked} setChecked={setChecked}/>
  );

  return (
    <View style={styles.sectionContainer}>
        <FlatList
          nestedScrollEnabled
          data = {tasks}
          renderItem = {renderItem}
          keyExtractor = {(item, index) => index.toString()}
        />
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 16
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
  item: {
    backgroundColor: '#70a4f2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 32,
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestScreen;
