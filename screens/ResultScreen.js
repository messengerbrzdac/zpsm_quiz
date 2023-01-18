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
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

const temp = [{
  nick: "Michal",
  score: 12,
  total: 20,
  type: "historia",
  createOn: "07-01-2023 17:39",
},{
  nick: "Mateusz",
  score: 18,
  total: 20,
  type: "historia",
  createOn: "07-01-2023 17:39",
}];

const Item = ({ item }) => (
  <View style = {styles.sectionRow}>
    <View style = {styles.items}>
      <Text>{item.nick}</Text>
   </View>
    <View style={styles.items}>
      <Text>{item.score}/{item.total}</Text>
    </View>
    <View style={styles.items}>
      <Text>{item.type}</Text>
    </View>
    <View style={styles.items}>
      <Text>{item.createOn}</Text>
    </View>
  </View>
);

function ResultScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getResults = async () => {
    try {
      const response = await fetch('https://tgryl.pl/quiz/results');
      const json = await response.json();
      setData(json);
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
    getResults().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getResults();
  }, []);

  return (
    <View style = {styles.sectionContainer}>
      <View  style = {styles.sectionTable}>
        <View style = {styles.items}>
          <Text>Nick</Text>
        </View>
        <View style = {styles.items}>
          <Text>Point</Text>
        </View>
        <View style = {styles.items}>
          <Text>Type</Text>
        </View>
        <View style = {styles.items}>
          <Text>Date</Text>
        </View>
      </View>
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


    /*
    <View style = {styles.sectionContainer}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          nestedScrollEnabled
          data = {data}
          renderItem = {renderItem}
          keyExtractor = {(item, index) => index.toString()}
          refreshControl = {
            <RefreshControl
              refreshing = {refreshing}
              onRefresh = {onRefresh}
            />
          }
        />
        )}
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
    </View>*/
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 2
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
  sectionTable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 5,
    padding: 0,
  },
  sectionRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 0,
    margin: 0,
  },
  highlight: {
    fontWeight: '700',
  },
  items: {
    width: 95,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    borderWidth: 1,
    padding: 1,
  },
  title: {
    fontSize: 32,
    color: 'black'
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultScreen;
