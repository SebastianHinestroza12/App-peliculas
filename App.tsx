import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from './src/routes/Navigation';

export const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
