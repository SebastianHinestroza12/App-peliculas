/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Movies} from '../interfaces/index';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movies;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
