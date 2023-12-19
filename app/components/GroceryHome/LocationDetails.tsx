import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, images} from '../../core';
import {Icon} from '..';
import {strings} from '../../i18n';

const LocationDetails: FC = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.locationText}>{strings.deliveryTo}</Text>
        <View style={styles.iconContain}>
          <Text style={styles.locationAddText}>{strings.greenWay}</Text>
          <Icon source={images.arrow} imageStyle={styles.arrowIcon} />
        </View>
      </View>
      <View>
        <Text style={styles.locationText}>{strings.within}</Text>
        <View style={styles.iconContain}>
          <Text style={styles.locationAddText}>{strings.oneHour}</Text>
          <Icon source={images.arrow} imageStyle={styles.arrowIcon} />
        </View>
      </View>
    </View>
  );
};
export default memo(LocationDetails);
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  locationText: {
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 15,
    color: colors.primaryWhite,
    textTransform: 'uppercase',
    opacity: 0.5,
  },
  iconContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationAddText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19,
    color: colors.white,
  },
  arrowIcon: {
    width: 8,
    height: 6,
    marginLeft: 5,
  },
});
