import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, MyImage} from '..';
import {colors, images} from '../../core';
import {dispatch} from '../../redux';
import {addToCart, removeFromCart} from '../../redux/modules/cartSlice';

type CartItemProps = {
  data?: any;
};

const CartItem: FC<CartItemProps> = props => {
  const {data} = props;

  const onCartHandler = useCallback(
    (val: string) => {
      if (val === 'remove') {
        dispatch(removeFromCart(data.product));
      }
      if (val === 'add') {
        dispatch(addToCart(data.product));
      }
    },
    [data],
  );
  return (
    <View style={styles.cartItem}>
      <MyImage
        source={{uri: data?.product?.images?.[0]}}
        style={styles.cartItemImage}
      />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{data?.product.title}</Text>
        <Text style={styles.cartItemPrice}>
          $ {Number(data?.product.price).toFixed(2)}
        </Text>
      </View>
      <View style={styles.cartItemQuantity}>
        <Icon
          source={images.minus}
          style={styles.btnPlusMinus}
          imageStyle={styles.iconStyle}
          onPress={onCartHandler.bind(null, 'remove')}
        />

        <Text style={styles.cartItemTitle}>{data?.noOfProducts}</Text>
        <Icon
          source={images.plus}
          style={styles.btnPlusMinus}
          imageStyle={styles.iconStyle}
          onPress={onCartHandler.bind(null, 'add')}
        />
      </View>
    </View>
  );
};
export default CartItem;
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhite,
    paddingVertical: 15,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 14,
    color: colors.primaryBlack,
    fontWeight: '500',
  },
  cartItemPrice: {
    fontSize: 14,
    color: colors.primaryBlack,
  },
  cartItemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    columnGap: 5,
  },
  btnPlusMinus: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.primaryWhite,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  text: {
    fontSize: 14,
    color: colors.primaryBlack,
  },
});
