import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../core';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';

export const Loader: FC = ({}) => {
  const isLoading = useSelector(
    (state: RootState) => state.generic.loader?.isLoading,
  );

  if (isLoading) {
    return (
      <View style={styles.modalStyles}>
        <View style={styles.mainViewWrapper}>
          <ActivityIndicator color={colors.white} size={'large'} />
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  modalStyles: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1000,
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    marginTop: 0,
  },
  mainViewWrapper: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    height: 100,
    width: 100,
  },
});
