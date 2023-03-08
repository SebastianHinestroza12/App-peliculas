/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {MovieDetails} from '../../interfaces/index';
import {Cast} from '../../interfaces/actors';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {ActorItem} from '../ActorItem/ActorItem';

interface Props {
  movieFull: MovieDetails;
  cast: Cast[];
}

export const MovieDetail = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={styles.container}>
        {/* Details */}

        <View style={styles.containerDetails}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text style={styles.rating}>{movieFull.vote_average.toFixed(1)}</Text>
          <Text style={styles.rating}>
            - {movieFull.genres.map(el => el.name).join(', ')}
          </Text>
        </View>

        {/* History */}

        <View style={styles.containerHistory}>
          <Text
            style={{
              fontSize: 16.5,
              textAlign: 'justify',
              color: '#000',
            }}>
            {movieFull.overview}
          </Text>
          <Text style={styles.text}>Presupuesto</Text>
          <Text
            style={{
              fontSize: 16.5,
              color: '#000',
            }}>
            {currencyFormatter.format(movieFull.budget, {
              code: 'USD',
              symbol: '$',
            })}
          </Text>
        </View>

        {/* Information Actors */}

        <View style={{marginBottom: 30}}>
          <Text style={styles.text}>Actors</Text>
          <FlatList
            data={cast}
            renderItem={({item}) => <ActorItem actor={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  containerDetails: {
    flexDirection: 'row',
  },
  containerTitle: {
    marginTop: 10,
  },
  rating: {
    marginLeft: 7,
  },
  containerHistory: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  listActor: {
    marginTop: 10,
  },
});
