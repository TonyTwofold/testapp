import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PickerIOSComponent, StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
}

const Cat = () => {
  return (
    <View>
      <Text>I'm cat!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Hello everyone!</Text>
      <Cat />
      <Cat />
    </View>
  );
}


export default Cafe;

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
})
); */ 
