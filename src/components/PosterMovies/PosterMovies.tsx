/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Movies} from '../../interfaces/index';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

export const PosterMovies = ({movie, height = 400, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;

  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width,
          height,
          marginHorizontal: 2,
          paddingBottom: 20,
          paddingHorizontal: 5,
        }}
        onPress={() => navigation.navigate('DetailsScreen', movie)}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 10,
  },

  image: {
    flex: 1,
    borderRadius: 20,
  },
});
