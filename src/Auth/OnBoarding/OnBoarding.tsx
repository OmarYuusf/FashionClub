import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface componentNameProps { }

const OnBoarding = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  }
});
