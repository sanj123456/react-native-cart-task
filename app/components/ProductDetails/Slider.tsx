import React, {FC, memo, useCallback, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {Icon} from '..';
import {colors, images} from '../../core';
type SliderProps = {
  data?: any;
  isBookMarked?: any;
  onFav?: () => void;
};
const Slider: FC<SliderProps> = props => {
  const {data, isBookMarked, onFav} = props;
  const [productImagesPageIndicatorIndex, setProductImagesPageIndicatorIndex] =
    useState(0);

  const renderItemHandler = useCallback(
    (item: any, index: any) => (
      <Image
        key={index}
        source={{
          uri: item,
        }}
        style={styles.productImage}
      />
    ),
    [],
  );

  const onPageSelectedHandler = useCallback(
    ({nativeEvent}: any) =>
      setProductImagesPageIndicatorIndex(nativeEvent.position),
    [],
  );

  const renderPage = (_: any, i: any) => {
    return (
      <View
        style={[
          productImagesPageIndicatorIndex === i
            ? styles.activePosition
            : styles.inActivePosition,
        ]}
        key={i}
      />
    );
  };

  return (
    <View>
      <PagerView
        onPageSelected={onPageSelectedHandler}
        style={styles.pagerContainer}
        pageMargin={1}>
        {data?.map(renderItemHandler)}
      </PagerView>
      <View pointerEvents="none" style={styles.paggingContainer}>
        {data?.map(renderPage)}
      </View>
      {isBookMarked > -1 ? (
        <Icon
          style={styles.favBtn}
          source={images.filledHeart}
          imageStyle={styles.iconStyle}
          onPress={onFav}
        />
      ) : (
        <Icon
          style={styles.favBtn}
          imageStyle={styles.iconStyle}
          source={images.heart}
          onPress={onFav}
        />
      )}
    </View>
  );
};
export default memo(Slider);

const styles = StyleSheet.create({
  pagerContainer: {
    width: '100%',
    height: 207,
    marginTop: 15,
  },
  paggingContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
    columnGap: 20,
  },
  productImage: {
    width: '100%',
    height: 207,
    resizeMode: 'contain',
  },
  favBtn: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 34,
    right: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  activePosition: {
    width: 20,
    height: 5,
    borderRadius: 10,
    backgroundColor: colors.yellow,
  },
  inActivePosition: {
    width: 20,
    height: 5,
    borderRadius: 10,
    backgroundColor: colors.offWhite,
  },
});
