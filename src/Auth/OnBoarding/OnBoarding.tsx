import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Slide from "./Slide/Slide"
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window")

interface componentNameProps { }
export const SLIDE_HEIGHT = 0.4 * height

const OnBoarding = (props: componentNameProps) => {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.slider} horizontal={true} snapToInterval={width} decelerationRate="fast" showsHorizontalScrollIndicator={false} bounces={false}>
        <Slide label="Relaxed" right />
        <Slide label="Playful" />
        <Slide label="Exocentric" />
        <Slide label="Funky" right />
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}></View>
        <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}></View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75
  },
  footer: {
    flex: 1,
  }
});
