import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { SLIDE_HEIGHT } from '../OnBoarding';

const { width, height } = Dimensions.get("window")

interface SlideProps {
  label: string,
  right?: boolean
}

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 120) },
    { translateX: right ? width / -2.6 : width / 2.6 },
    { rotate: right ? "90deg" : "-90deg" }
  ]
  return (
    <View style={{ width }}>
      <View style={[styles.containerTitle, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTitle: {

  },
  title: {
    fontSize: 90,
    textAlign: 'center',
    fontWeight: "bold",
    color: 'white'
  }
});
