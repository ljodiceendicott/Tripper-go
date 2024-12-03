import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import AlbumItem from '@/components/albumitem';
import response from "@/data/spotifyresponse.json";


export default function TabTwoScreen() {

  const responsejson = response.items;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <Collapsible title="This is the albums">
        {responsejson.map((art, index) => (
          // Need to retrieve Post so it will be art.post
          // <Text key={index} style={styles.text}>{art.name}</Text>
          <AlbumItem
            key={index}
            title={art.name}
            imgurl={art.images[0].url}
            playlisturl={art.external_urls.spotify}></AlbumItem>
        ))}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  text:{
    color:"white"
  },
});
