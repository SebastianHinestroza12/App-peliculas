import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movies} from '../../interfaces/index';

interface Props {
  movie: Movies;
}

export const PosterMovies = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 430,
  },

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
