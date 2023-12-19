/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {StatusBar, View} from 'react-native';
import {colors} from './core';
import {Provider} from 'react-redux';
import store from './redux';
import {Loader} from './components';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.primaryBlue}
          />
          <MainNavigator />
          <Loader />
        </Provider>
      </NavigationContainer>
      <FlashMessage duration={4000} position="top" color={colors.white} />
    </View>
  );
};

export default App;
