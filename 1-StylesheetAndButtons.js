import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Wasiq')
  const [person, setPerson] = useState({name: "Shahzil", age: 22})

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text>My name is {name}</Text>
        <Text>My name is {person.name} and my age is {person.age}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem Ipsum dolor sit amet.<Text> Testing </Text></Text>
        <Text>Lorem Ipsum dolor sit amet.</Text>
        <Text>Lorem Ipsum dolor sit amet.</Text>
        <Text>Lorem Ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={()=> setName('Random Name')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
     fontWeight: 'bold'
  }, 
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  }
});
