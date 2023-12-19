import {StyleSheet} from 'react-native';
import {colors} from '../../core';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primaryBlue,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    padding: 20,
  },
  contentContainerStyle1: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  card: {
    width: 270,
    height: 123,
  },
  itemSeparatorStyle: {
    width: 20,
  },
  inputStyle: {
    marginTop: 15,
  },
  recomText: {
    fontSize: 30,
    lineHeight: 38,
    color: colors.primaryBlack,
    marginLeft: 20,
  },
});
