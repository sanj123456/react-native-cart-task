import React, {FC, useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CartHeader, PrimaryButton} from '../../components';
import CartItem from '../../components/ShoppingCart/CartItem';
import {strings} from '../../i18n';
import {RootState} from '../../redux';
import {CommonNavigationProps} from '../../types/commonTypes';
import {styles} from './styles';
import {screenName} from '../../core';

const deliveryCharge = 2;

const ShoppingCart: FC<CommonNavigationProps> = props => {
  const {navigation} = props;

  const goBackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const cartData = useSelector((state: RootState) => state.cart.cartProducts);

  const renderItemHandler = useCallback((item: any) => {
    return <CartItem data={item.item} />;
  }, []);

  const cartTotalAmount = cartData?.reduce((acc: number, item: any) => {
    return (acc += +item.product.price * item.noOfProducts);
  }, 0);

  const onShopNow = useCallback(() => {
    navigation.navigate(screenName.groceryHome);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <CartHeader onPress={goBackHandler} count={cartData.length} />
      {cartData.length > 0 ? (
        <>
          <FlatList
            data={cartData}
            renderItem={renderItemHandler}
            bounces={false}
            style={{marginTop: 32}}
            contentContainerStyle={{paddingBottom: 32}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.cartFooter}>
            <View style={styles.flexStyle}>
              <Text style={styles.totalText}>{strings.subtotal}</Text>
              <Text style={styles.priceText}>
                $ {cartTotalAmount?.toFixed(2)}
              </Text>
            </View>
            <View style={styles.flexStyle}>
              <Text style={styles.totalText}>{strings.delivery}</Text>
              <Text style={styles.priceText}>
                $ {deliveryCharge?.toFixed(2)}
              </Text>
            </View>
            <View style={styles.flexStyle}>
              <Text style={styles.totalText}>{strings.total}</Text>
              <Text style={styles.priceText}>
                $ {(cartTotalAmount + deliveryCharge).toFixed(2)}
              </Text>
            </View>
            <PrimaryButton
              title={strings.proceedToCheckout}
              style={styles.button}
              tStyle={styles.buttonText}
            />
          </View>
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
          <PrimaryButton
            title={strings.shopNow}
            style={styles.button}
            tStyle={styles.buttonText}
            onPress={onShopNow}
          />
        </View>
      )}
    </View>
  );
};

export default ShoppingCart;
