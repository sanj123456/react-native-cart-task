import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../core';
type PriceDetailsProps = {
  data?: any;
};
const PriceDetails: FC<PriceDetailsProps> = props => {
  const {data} = props;
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.price}>
        $ {data.price}
        {/* $34.70<Text style={styles.priceUnit}>/KG</Text> */}
      </Text>
      <View style={styles.offTextContainer}>
        <Text style={styles.offText}>{data.discountPercentage} % OFF</Text>
      </View>
    </View>
  );
};
export default memo(PriceDetails);
const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    columnGap: 20,
    marginHorizontal: 20,
    marginTop: 26,
  },
  price: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    color: colors.primaryBlue,
  },
  priceUnit: {
    fontWeight: '400',
  },
  offTextContainer: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  offText: {
    color: 'white',
  },
});
