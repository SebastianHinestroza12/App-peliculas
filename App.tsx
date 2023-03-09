import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from './src/routes/Navigation';
// import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const AppStateColors = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppStateColors>
        <SafeAreaView style={styles.container}>
          <Navigation />
          {/* <FadeScreen /> */}
        </SafeAreaView>
      </AppStateColors>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
