import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from '../core';
import ProductDetails from '../screens/ProductDetails/Index';
import ShoppingCart from '../screens/ShoppingCart';
import TabNavigator from './TabNavigator';
const stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <stack.Navigator
      initialRouteName={screenName.tabNavigator}
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen component={TabNavigator} name={screenName.tabNavigator} />
      <stack.Screen component={ShoppingCart} name={screenName.shoppingCart} />
      <stack.Screen
        component={ProductDetails}
        name={screenName.productDetails}
      />
    </stack.Navigator>
  );
};
export default AppStack;
