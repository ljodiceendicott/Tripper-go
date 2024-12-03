import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { } from 'react-native';

export default function HomeScreen() {
const [startlocation, onChangestart] = useState("");
const [endlocation, onChangeend] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRIPPER-GO</Text>
      <TextInput
        editable
        placeholder="Starting location"
        placeholderTextColor={"gray"}
        style={styles.input}
        onChangeText={onChangestart}
        value={startlocation}
      />
      <TextInput
        editable
        style={styles.input}
        placeholder="Ending Location"
        placeholderTextColor={"gray"}
        onChangeText={onChangeend}
        value={endlocation}
      />
      <Button
        onPress={()=>{alert("This is going to do something.. eventually")}}
        title="GO"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    zIndex:1,
    backgroundColor:"white"
  },
  title:{
    color:"white",
    fontSize:70,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    justifyContent:"center"
  },
  text: {
    color: "white",
    fontSize: 300,
  },
});
