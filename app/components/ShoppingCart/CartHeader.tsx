import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '..';
import {colors, images} from '../../core';
type CartHeaderProps = {
  onPress?: () => void;
  count?: number | any;
};
const CartHeader: FC<CartHeaderProps> = props => {
  const {onPress, count} = props;
  return (
    <View style={styles.header}>
      <Icon source={images.back} style={styles.iconView} onPress={onPress} />
      {count > 0 ? (
        <Text style={styles.title}>{`Shopping Cart (${count})`}</Text>
      ) : (
        <Text style={styles.title}>{`Shopping Cart`}</Text>
      )}
    </View>
  );
};
export default memo(CartHeader);
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  iconView: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.primaryBlack,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  bagImg: {
    tintColor: colors.black,
    height: 24,
    width: 24,
  },
});
