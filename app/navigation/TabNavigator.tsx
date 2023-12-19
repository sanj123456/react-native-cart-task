import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {colors, images, screenName} from '../core';
import Categories from '../screens/Categories/Index';
import Favorite from '../screens/Favourite/Index';
import GroceryHome from '../screens/GroceryHome/Index';
import More from '../screens/More/Index';

const tabs = createBottomTabNavigator();
const TabNavigator = () => {
  const iconHandler = useCallback((data: any) => {
    const {focused, children} = data;
    switch (children) {
      case screenName.groceryHome:
        return (
          <Image
            source={images.home}
            style={focused ? styles.imageSize : styles.imageSize1}
          />
        );

      case screenName.categories:
        return (
          <Image
            source={images.category}
            style={focused ? styles.imageSize : styles.imageSize1}
          />
        );

      case screenName.favorite:
        return (
          <Image
            source={images.favourite}
            style={focused ? styles.imageSize : styles.imageSize1}
          />
        );
      case screenName.more:
        return (
          <Image
            source={images.menu}
            style={focused ? styles.imageSize : styles.imageSize1}
          />
        );
    }
  }, []);

  const labelHandler = useCallback((data: any) => {
    const {focused, children} = data;
    switch (children) {
      case screenName.groceryHome:
        return (
          <Text style={focused ? styles.focusedText : styles.unFousedText}>
            Home
          </Text>
        );
      case screenName.categories:
        return (
          <Text style={focused ? styles.focusedText : styles.unFousedText}>
            Category
          </Text>
        );

      case screenName.favorite:
        return (
          <Text style={focused ? styles.focusedText : styles.unFousedText}>
            Favorite
          </Text>
        );
      case screenName.more:
        return (
          <Text style={focused ? styles.focusedText : styles.unFousedText}>
            More
          </Text>
        );
    }
  }, []);

  return (
    <tabs.Navigator>
      <tabs.Screen
        component={GroceryHome}
        name={screenName.groceryHome}
        options={{
          headerShown: false,
          tabBarLabel: labelHandler,
          tabBarIcon: data =>
            iconHandler({...data, children: screenName.groceryHome}),
        }}
      />
      <tabs.Screen
        component={Categories}
        name={screenName.categories}
        options={{
          headerShown: false,
          tabBarLabel: labelHandler,
          tabBarIcon: data =>
            iconHandler({...data, children: screenName.categories}),
        }}
      />
      <tabs.Screen
        component={Favorite}
        name={screenName.favorite}
        options={{
          headerShown: false,
          tabBarLabel: labelHandler,
          tabBarIcon: data =>
            iconHandler({...data, children: screenName.favorite}),
        }}
      />
      <tabs.Screen
        component={More}
        name={screenName.more}
        options={{
          headerShown: false,
          tabBarLabel: labelHandler,
          tabBarIcon: data => iconHandler({...data, children: screenName.more}),
        }}
      />
    </tabs.Navigator>
  );
};
export default TabNavigator;
export const styles = StyleSheet.create({
  home: {
    width: 20,
    height: 20,
  },
  imageSize: {
    height: 25,
    width: 25,
    tintColor: colors.primaryBlue,
    resizeMode: 'contain',
  },
  imageSize1: {
    height: 25,
    width: 25,
    tintColor: colors.borderColor,
    resizeMode: 'contain',
  },
  focusedText: {
    fontSize: 12,
    color: colors.primaryBlue,
    fontWeight: '600',
  },
  unFousedText: {
    fontSize: 12,
    color: colors.borderColor,
    fontWeight: '500',
  },
});
