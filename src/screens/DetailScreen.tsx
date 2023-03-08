import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import {RootStackParams} from '../routes/Navigation';
import {useMovieDetail} from '../hooks/Movie/useMovieDetail';
import {Loading} from '../components/Loading/Loading';
import {MovieDetail} from '../components/MovieDetail/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

interface PropsDetail
  extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailScreen = ({route, navigation}: PropsDetail) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const {cast, isLoading, movieFull} = useMovieDetail(movie.id);
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.imageDetails}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View>
        {isLoading ? (
          <Loading />
        ) : (
          <MovieDetail movieFull={movieFull!} cast={cast} />
        )}
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="#fff" name="arrow-back-outline" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageDetails: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#a9a9a9',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
  },
});
