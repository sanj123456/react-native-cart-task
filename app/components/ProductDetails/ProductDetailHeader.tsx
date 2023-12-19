import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '..';
import {colors, images} from '../../core';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
type ProductDetailHeaderProps = {
  onBack?: () => void;
  onCart?: () => void;
};
const ProductDetailHeader: FC<ProductDetailHeaderProps> = props => {
  const {onBack, onCart} = props;
  const cartData = useSelector((state: RootState) => state.cart.cartProducts);
  return (
    <View style={styles.header}>
      <Icon
        imageStyle={styles.back}
        source={images.back}
        style={styles.bagContainer}
        onPress={onBack}
      />
      <View>
        <Icon
          source={images.bag}
          imageStyle={styles.bagImg}
          style={styles.bagContainer}
          onPress={onCart}
        />
        {cartData.length > 0 ? (
          <View style={styles.countView}>
            <Text style={styles.text}>{cartData.length}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default memo(ProductDetailHeader);
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 10,
  },
  back: {
    height: 40,
    width: 40,
  },
  bagImg: {
    tintColor: 'black',
    height: 24,
    width: 24,
  },
  bagContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countView: {
    height: 20,
    width: 20,
    backgroundColor: colors.yellow,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -4,
  },
  text: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '600',
  },
});
