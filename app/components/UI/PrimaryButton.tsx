import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../core';
import {PrimaryButtonProps} from '../../types/componentsTypes';

const PrimaryButton: FC<PrimaryButtonProps> = props => {
  const {onPress, style, title, tStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.btnText, tStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default memo(PrimaryButton);
const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderColor: colors.primaryBlue,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
  },
});
