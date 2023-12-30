import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Wasiq')
  const [age, setAge] = useState('22') 

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput multiline placeholder = 'e.g. John Doe' style = {styles.input} onChangeText = {(e)=> setName(e)} />
      <Text>Enter Age: </Text>
      <TextInput keyboardType='numeric' placeholder = 'e.g. 99' style = {styles.input} onChangeText = {(e)=> setAge(e)} />
      <Text>Name: {name}, Age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});