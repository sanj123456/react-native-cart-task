import {StyleSheet} from 'react-native';
import {colors} from '../../core';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  title: {
    color: colors.primaryBlack,
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 62,
    marginHorizontal: 20,
  },
  darkTitle: {
    fontWeight: '800',
  },
  txtDetails: {
    color: colors.primaryBlack,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 20,
    marginTop: 30,
  },
  txtDetailsDescription: {
    color: colors.inputPlaceHolder,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginHorizontal: 20,
    marginTop: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    columnGap: 20,
    marginTop: 30,
  },
  button1: {
    color: colors.primaryBlue,
    flex: 1,
  },
  button2: {
    backgroundColor: colors.primaryBlue,
    flex: 1,
  },

  button1Text: {
    color: colors.primaryBlue,
    fontSize: 14,
    fontWeight: '600',
  },
  button2Text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
