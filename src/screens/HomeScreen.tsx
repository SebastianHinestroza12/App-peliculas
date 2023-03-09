/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useEffect} from 'react';
import React from 'react';
import {View, Dimensions, ScrollView, Text, StyleSheet} from 'react-native';
import {useMovies} from '../hooks/Movie/useMovies';
import Carousel from 'react-native-reanimated-carousel';
import {Loading} from '../components/Loading/Loading';
import {PosterMovies} from '../components/PosterMovies/PosterMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CardMovies} from '../components/CardMovies/CardMovies';
import {Gradient} from '../components/GradientBackgroud/Gradient';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading, getPosterColors} =
    useMovies();
  const {top} = useSafeAreaInsets();
  const {width: windowWidth} = Dimensions.get('window');

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Gradient>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.inCines}>Movies In Cinemas</Text>
        </View>
        <View style={{marginTop: top + 20}}>
          <View>
            <Carousel
              mode="parallax"
              style={{width: windowWidth, justifyContent: 'center'}}
              pagingEnabled={false}
              windowSize={2}
              snapEnabled
              onSnapToItem={index => getPosterColors(index)}
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
    </Gradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inCines: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
