import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>I'm {props.name}! I am {isHungry ? "hungry" : "full"}!</Text>
      <Button 
        onPress = {() => {
          isHungry ? setIsHungry(false) : setIsHungry(true);
        }}
        //disabled = {!isHungry}
        title = {isHungry ? "Please give me foodz human!" : "About god damn time..."}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Image
        source = {{uri: "https://png.pngtree.com/png-vector/20201229/ourmid/pngtree-a-british-short-blue-and-white-cat-png-image_2654518.jpg"}}
        style ={{height: 200, width: 200}}
      />
      <Text>Hello everyone!</Text>
      <Cat name="Tony"/>
      <Cat name="Swiz"/>
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
