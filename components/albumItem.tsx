import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface playlist {
  children?: React.ReactNode;
  title: string;
  imgurl: string;
  playlisturl: string;
}
const AlbumItem: React.FC<playlist> = ({
  children,
  title,
  playlisturl
}) => {
  return (
    <View style={styles.container}>
    <View>
        {/* <Image
        style={styles.img}
        src={playlisturl}
        /> */}
        <Text>This is a test</Text>
    </View>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default AlbumItem;

const styles = StyleSheet.create({
    childrenContainer:{

    },
    img:{
        width:100,
        height:100,
    },
    container:{
    backgroundColor:"white",
    zIndex:1,
    flex:1
    }
})