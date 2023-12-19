import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../../core';

const Ratting = () => {
  return (
    <View style={styles.ratingContainer}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => {
          return <Image source={item <= 4 ? images.star : images.halfstar} />;
        }}
        horizontal
        style={styles.root}
      />
      <Text style={styles.reviewsText}>110 Reviews</Text>
    </View>
  );
};
export default Ratting;
const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
  },
  ratingContainer: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
  },
  reviewsText: {
    color: '#A1A1AB',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 5,
  },
});
