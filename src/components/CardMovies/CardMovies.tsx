/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {PosterMovies} from '../PosterMovies/PosterMovies';
import {Movies} from '../../interfaces/index';

interface PropsCard {
  title?: string;
  state: Movies[];
}

export const CardMovies = ({title, state}: PropsCard) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            marginLeft: 11,
            marginBottom: 12,
            fontSize: 20,
            textTransform: 'uppercase',
            color: '#000',
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={state}
        renderItem={({item}) => (
          <PosterMovies movie={item} height={200} width={135} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
