import React, { useCallback, useState, useEffect } from 'react';
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
  RefreshControl
} from 'react-native';

const temp = [{
  name: "Moda na sukces",
  description: "Quiz o najważniejszych wydarzeń serialu.",
  tags: ["tv", "tasiemiec", "serial"],
  level: "średni",
  numberOfTasks: 5
},{
  name: "Tranzystor bipolarny i polowy",
  description: "Test sprawdzający podstawową wiedzę z zakresu elektroniki, związany z transytorami bipolarnymi i polowymi.",
  tags: ["elektronika","fizyka"],
  level: "średni",
  numberOfTasks: 15
},{
  name: "Wodzowie i dowódcy starożytnego Rzymu",
  description: "Odgadnij prawidłowe nazwiska lub konkretnym nazwiskom przyporządkuj odpowiednie wydarzenia.",
  tags: ["historia","starożytny Rzym"],
  level: "trudny",
  numberOfTasks: 10
},{
  name: "Wodzowie i dowódcy starożytnego Rzymu",
  description: "Odgadnij prawidłowe nazwiska lub konkretnym nazwiskom przyporządkuj odpowiednie wydarzenia.",
  tags: ["historia","starożytny Rzym"],
  level: "trudny",
  numberOfTasks: 10
}];

const Item = ({ item }) => (
  <View style = {styles.sectionRow}>
    <View style = {styles.title}>
      <Text style = {styles.fontTitle}>{item.name}</Text>
   </View>
    <View style={styles.sectionTags}>
      <Text style = {styles.fontTags}>
        {item.tags.map((n) => 
          <Text key={n.toString()}>#{n} </Text>
        )}
      </Text>
    </View>
    <View style={styles.sectionDescription}>
      <Text style = {styles.fontDescription}>{item.description}</Text>
    </View>
  </View>
);

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [tests, setTests] = useState();

  const getTests = async () => {
    try {
     const response = await fetch('https://tgryl.pl/quiz/tests');
     const json = await response.json();
     setTests(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  const renderItem = ({ item }) => (
    <Item item={item}/>
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getTests().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getTests();
  }, []);

  return (
    <View style={styles.sectionContainer}>
        <FlatList
          nestedScrollEnabled
          data = {temp}
          renderItem = {renderItem}
          keyExtractor = {(item, index) => index.toString()}
          refreshControl = {
            <RefreshControl
              refreshing = {refreshing}
              onRefresh = {onRefresh}
            />
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 12,
  },
  sectionRow: {
    width: '96%',
    borderWidth: 1,
    padding: 0,
    marginVertical: 12,
  },
  sectionTitle: {
    width: '100%',
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
  },
  sectionDescription: {
    marginTop: 0,
  },
  sectionTags: {
    marginTop: 0,
  },
  fontTitle: {
    fontSize: 24,
    color: 'black',
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  fontDescription: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  fontTags: {
    fontSize: 14,
    color: "lightblue",
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
