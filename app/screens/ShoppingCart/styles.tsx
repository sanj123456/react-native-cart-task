import {StyleSheet} from 'react-native';
import {colors} from '../../core';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    color: colors.primaryBlack,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  flexStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  cartFooter: {
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: colors.primaryWhite,
    borderRadius: 30,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  },
  totalText: {
    fontSize: 16,
    color: colors.primaryGrey,
    marginVertical: 10,
  },
  priceText: {
    fontSize: 16,
    color: colors.primaryBlack,
    marginVertical: 10,
    fontWeight: '500',
  },

  button: {
    backgroundColor: colors.primaryBlue,
    height: 56,
    marginTop: 28,
    marginBottom: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
  },
});
