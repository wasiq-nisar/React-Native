import {StyleSheet, Text, View, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Wasiq', id: '1'},
    {name: 'Shahzil', id: '2'},
    {name: 'Ismail', id: '3'},
    {name: 'Manan', id: '4'},
    {name: 'Hamza', id: '6'},
    {name: 'Abubakar', id: '7'},
    {name: 'Abrar', id: '8'},
    {name: 'Abdullah', id: '9'},
    {name: 'Adnan', id: '10'},
  ])
   
  const pressHandler = (id) => {
    console.log(id)
    setPeople((people) => {
      return people.filter((person) => person.id != id)
    })
  }

  return (
    <View style = {styles.container}>
      <FlatList
        keyExtractor = {(item) => item.id}
        numColumns = {2}
        data = {people} 
        renderItem = {({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style = {styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} 
       />
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
    marginHorizontal: 10,
    marginTop: 24,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 24
  }
});