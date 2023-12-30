import {StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Wasiq', key: '1'},
    {name: 'Shahzil', key: '2'},
    {name: 'Ismail', key: '3'},
    {name: 'Manan', key: '4'},
    {name: 'Hamza', key: '6'},
    {name: 'Abubakar', key: '7'},
    {name: 'Abrar', key: '8'},
    {name: 'Abdullah', key: '9'},
    {name: 'Adnan', key: '10'},
  ])

  return (
    <View style = {styles.container}>
      <ScrollView>
        { people.map((person) => {
          return (
            <View key={person.key}>
              <Text style = {styles.item}>{person.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});