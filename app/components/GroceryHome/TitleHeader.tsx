import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '..';
import {colors, images} from '../../core';
import {strings} from '../../i18n';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
type TitleHeaderProps = {
  onCart?: () => void;
};
const TitleHeader: FC<TitleHeaderProps> = props => {
  const {onCart} = props;
  const cartData = useSelector((state: RootState) => state.cart.cartProducts);
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{strings.heySanjay}</Text>
      <View>
        <Icon
          source={images.bag}
          imageStyle={styles.bagImg}
          onPress={onCart}
          style={styles.bagContainer}
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
export default memo(TitleHeader);
const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.primaryBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titleText: {
    color: colors.white,
    fontSize: 22,
  },
  bagImg: {
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
    height: 22,
    width: 22,
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
