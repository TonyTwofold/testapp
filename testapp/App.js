import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

const Cat = () => {
  const firstName = "Johnny";
  const lastName = "Cat";

  return (
    <Text>Hello Anton, I'm {getFullName(firstName, lastName)}.</Text>
  );

};

export default Cat;

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Anton!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */ 
