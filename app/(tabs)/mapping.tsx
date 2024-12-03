import { useState } from 'react';
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps';


import { ThemedView } from '@/components/ThemedView';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const [text, onChangeText] = useState("Useless Text");
  return (
    <GestureHandlerRootView>
      <TextInput style={styles.text}
      editable
      placeholder='Enter an Address'
      placeholderTextColor={"black"}
      onChangeText={onChangeText} value={text} />
      <ThemedView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 42.3601, // Boston's latitude
            longitude: -71.0589, // Boston's lonrgitude
            latitudeDelta: 0.005, // Approximate zoom level (smaller values zoom in)
            longitudeDelta: 0.005,
          }}
        />
      </ThemedView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  text:{
    position: "absolute",
    zIndex: 1,
    height: 40,
    width: "80%",
    top:"5%",
    left:25,
    color:"black",
    fontSize:20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  map:{
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
