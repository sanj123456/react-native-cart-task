import React, {FC, memo, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon, MyImage} from '..';
import {colors, images} from '../../core';
import {successToast} from '../../core/helpers';
import {strings} from '../../i18n';
import {dispatch} from '../../redux';
import {addToCart} from '../../redux/modules/cartSlice';
import {setFavoriteItem} from '../../redux/modules/favoriteSlice';
type ProductItemProps = {
  item: any;
  onPress?: () => void;
};
const ProductItem: FC<ProductItemProps> = props => {
  const {item, onPress} = props;
  const favoriteData = useSelector((state: any) => state.favorite.favorite);
  const isBookMarked = favoriteData.findIndex((ele: any) => ele.id === item.id);

  const onFavoriteProduct = useCallback(() => {
    dispatch(setFavoriteItem(item));
  }, [item]);

  const onAddToCartHandler = useCallback(() => {
    dispatch(addToCart(item));
    successToast(strings.msgAddedToCart);
  }, [item]);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {isBookMarked > -1 ? (
        <Icon
          source={images.fav}
          imageStyle={styles.unFav}
          style={styles.favView}
          onPress={onFavoriteProduct}
        />
      ) : (
        <Icon
          source={images.unFav}
          imageStyle={styles.unFav}
          style={styles.favView}
          onPress={onFavoriteProduct}
        />
      )}
      <MyImage source={{uri: item.images[0]}} style={styles.product} />
      <View style={styles.productsDetails}>
        <View style={{flex: 1}}>
          <Text style={styles.dollar} numberOfLines={1}>
            $ {item.price}
          </Text>
          <Text style={styles.name} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <Icon
          source={images.add}
          imageStyle={styles.addIcon}
          onPress={onAddToCartHandler}
        />
      </View>
    </TouchableOpacity>
  );
};
export default memo(ProductItem);
const styles = StyleSheet.create({
  card: {
    width: '47%',
    backgroundColor: colors.primaryWhite,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  productsDetails: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unFav: {
    width: 15,
    height: 15,
  },
  favView: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  product: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  dollar: {
    fontSize: 14,
    color: colors.primaryBlack,
    fontWeight: '600',
  },
  name: {
    fontSize: 12,
    color: colors.lightGrey,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
});
