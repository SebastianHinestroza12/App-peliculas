/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../../context/GradientContext';
import {useFade} from '../../hooks/Fade/index';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Gradient = ({children}: Props) => {
  const {colors, prevColors} = useContext(GradientContext);
  const {primary, secondary, tertiary} = prevColors;
  const {fadeIn, opacity} = useFade();

  useEffect(() => {
    fadeIn();
  }, [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[primary, secondary, tertiary]}
        start={{x: 0.2, y: 0.2}}
        end={{x: 0.5, y: 0.7}}
        style={styles.gradient}>
        {children}
      </LinearGradient>

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, colors.tertiary]}
          start={{x: 0.2, y: 0.2}}
          end={{x: 0.5, y: 0.7}}
          style={styles.gradient}>
          {children}
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
