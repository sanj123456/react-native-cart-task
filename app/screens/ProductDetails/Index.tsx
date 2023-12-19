import React, {FC, memo, useCallback} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  PriceDetails,
  PrimaryButton,
  ProductDetailHeader,
  Ratting,
  Slider,
} from '../../components';
import {screenName} from '../../core';
import {strings} from '../../i18n';
import {dispatch} from '../../redux';
import {addToCart} from '../../redux/modules/cartSlice';
import {setFavoriteItem} from '../../redux/modules/favoriteSlice';
import {CommonNavigationProps} from '../../types/commonTypes';
import {styles} from './styles';
import {successToast} from '../../core/helpers';

const ProductDetails: FC<CommonNavigationProps> = props => {
  const {route, navigation} = props;
  const productDetails = route?.params?.data;

  const favoriteData = useSelector((state: any) => state.favorite.favorite);
  const isBookMarked = favoriteData.findIndex(
    (ele: any) => ele.id === productDetails.id,
  );

  const onFavoriteProduct = useCallback(() => {
    dispatch(setFavoriteItem(productDetails));
  }, [productDetails]);

  const onBackHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCartHandler = useCallback(() => {
    navigation.navigate(screenName.shoppingCart);
  }, [navigation]);

  const onAddProductOnCartHandler = useCallback(() => {
    dispatch(addToCart(productDetails));
    navigation.navigate(screenName.shoppingCart);
  }, [navigation, productDetails]);

  const onAddToCartHandler = useCallback(() => {
    dispatch(addToCart(productDetails));
    successToast(strings.msgAddedToCart);
  }, [productDetails]);

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <ProductDetailHeader onBack={onBackHandler} onCart={onCartHandler} />
      <Text style={styles.title}>
        {productDetails.title}
        {'\n'}
        <Text style={styles.darkTitle}>{productDetails.brand}</Text>
      </Text>
      <Ratting />
      <Slider
        data={productDetails.images}
        isBookMarked={isBookMarked}
        onFav={onFavoriteProduct}
      />
      <PriceDetails data={productDetails} />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={strings.addToCart}
          onPress={onAddToCartHandler}
          style={styles.button1}
          tStyle={styles.button1Text}
        />
        <PrimaryButton
          title={strings.buyNow}
          onPress={onAddProductOnCartHandler}
          style={styles.button2}
          tStyle={styles.button2Text}
        />
      </View>
      <Text style={styles.txtDetails}>{strings.details}</Text>
      <Text style={styles.txtDetailsDescription}>
        {productDetails.description}
      </Text>
    </ScrollView>
  );
};
export default memo(ProductDetails);
