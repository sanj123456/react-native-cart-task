import React, {forwardRef, memo, useImperativeHandle, useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Icon} from '..';
import {colors, images} from '../../core';
import {FieldInputProps} from '../../types/componentsTypes';

const FieldInput = forwardRef<any, FieldInputProps>((props, ref) => {
  const {
    inputStyles,
    onChangeText,
    onBlur,
    viewStyle,
    value,
    blurOnSubmit,
    maxLength,
    onSubmitEditing,
    keyboardType,
    placeholder,
    isPassword,
  } = props;

  const inputRef = useRef<any>(null);

  useImperativeHandle(
    ref,
    () => ({
      getFocus: () => inputRef.current.focus(),
    }),
    [],
  );

  return (
    <View style={[styles.root, viewStyle]}>
      <Icon source={images.search} imageStyle={styles.icon} />
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        placeholderTextColor={colors.inputPlaceHolder}
        style={[styles.input, inputStyles]}
        autoCapitalize={'none'}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        keyboardType={keyboardType}
        blurOnSubmit={blurOnSubmit}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="next"
        secureTextEntry={isPassword ? true : false}
      />
    </View>
  );
});

export default memo(FieldInput);
const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.darkBlue,
    borderRadius: 30,
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 12,
  },
});
