import React from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import {useFade} from '../hooks/Fade/index';

export const FadeScreen = () => {
  const {fadeOut, fadeIn, opacity} = useFade();
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.children, opacity}} />
      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  children: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: '#fff',
    borderWidth: 10,
  },
});
