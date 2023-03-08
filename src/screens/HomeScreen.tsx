/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {useMovies} from '../hooks/Movie/useMovies';
import Carousel from 'react-native-reanimated-carousel';
import {Loading} from '../components/Loading/Loading';
import {PosterMovies} from '../components/PosterMovies/PosterMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CardMovies} from '../components/CardMovies/CardMovies';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth} = Dimensions.get('window');

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View>
          <Carousel
            mode="parallax"
            style={{width: windowWidth, justifyContent: 'center'}}
            pagingEnabled={false}
            windowSize={2}
            snapEnabled
            width={300}
            height={400}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 40,
              parallaxAdjacentItemScale: 0.75,
            }}
            data={nowPlaying}
            renderItem={({item}) => <PosterMovies movie={item} />}
          />
        </View>
        <CardMovies title="Popular movies" state={popular} />
        <CardMovies title="Top rated movies" state={topRated} />
        <CardMovies title="Upcoming movies" state={upcoming} />
      </View>
    </ScrollView>
  );
};
