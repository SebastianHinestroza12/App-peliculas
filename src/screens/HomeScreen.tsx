/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {useMovies} from '../hooks/Movie/useMovies';
import Carousel from 'react-native-reanimated-carousel';
// import {Loading} from '../components/Loading/Loading';
import {PosterMovies} from '../components/PosterMovies/PosterMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const {moviesInCinemas} = useMovies();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth} = Dimensions.get('window');

  // isLoading ? <Loading /> : moviesInCinemas;
  return (
    <View style={{marginTop: top + 20}}>
      <Carousel
        mode="parallax"
        style={{width: windowWidth, justifyContent: 'center'}}
        pagingEnabled={false}
        windowSize={2}
        snapEnabled
        width={300}
        height={420}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
          parallaxAdjacentItemScale: 0.75,
        }}
        data={moviesInCinemas}
        renderItem={({item}) => <PosterMovies movie={item} />}
      />
    </View>
  );
};
