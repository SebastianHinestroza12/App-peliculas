import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../../interfaces/actors';

interface Props {
  actor: Cast;
}

export const ActorItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <View>
        {actor.profile_path && (
          <Image
            source={{
              uri,
            }}
            style={styles.imageActor}
          />
        )}
      </View>
      <View style={styles.containerText}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.nameSecondary}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 10,
    backgroundColor: '#000',
    marginRight: 10,
  },
  containerText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  nameSecondary: {
    fontSize: 16,
    opacity: 0.7,
    color: '#fff',
  },
  imageActor: {
    width: 50,
    height: 50,
  },
});
