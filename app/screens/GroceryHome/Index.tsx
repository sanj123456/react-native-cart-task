import React, {FC, memo, useCallback, useEffect} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {LocationDetails, ProductItem, TitleHeader} from '../../components';
import InputField from '../../components/UI/InputField';
import MyImage from '../../components/UI/MyImage';
import {images, screenName} from '../../core';
import {strings} from '../../i18n';
import {getProductsApi} from '../../services/APIs';
import {CommonNavigationProps} from '../../types/commonTypes';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';

const GroceryHome: FC<CommonNavigationProps> = ({navigation}) => {
  const productsData = useSelector(
    (state: RootState) => state.products.products,
  );

  useEffect(() => {
    getProductsApi();
  }, []);

  const onPressProduct = useCallback(
    (data: any) => navigation.navigate(screenName.productDetails, {data}),
    [navigation],
  );

  const renderItem = useCallback(
    (item: any) => {
      return (
        <ProductItem
          key={item.index}
          item={item.item}
          onPress={onPressProduct.bind(null, item.item)}
        />
      );
    },
    [onPressProduct],
  );

  const renderBannerItem = useCallback(
    () => <MyImage source={images.card} style={styles.card} />,
    [],
  );

  const itemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeparatorStyle} />,
    [],
  );

  const onCartHandler = useCallback(() => {
    navigation.navigate(screenName.shoppingCart);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <TitleHeader onCart={onCartHandler} />
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <InputField
            placeholder={strings.searchProductsOrStore}
            viewStyle={styles.inputStyle}
          />
          <LocationDetails />
        </View>
        <FlatList
          data={[1, 1, 1]}
          horizontal
          nestedScrollEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparatorComponent}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderBannerItem}
        />
        <Text style={styles.recomText}>{strings.recommended}</Text>
        <FlatList
          data={productsData}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          numColumns={2}
          nestedScrollEnabled
          scrollEnabled={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle1}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </ScrollView>
    </View>
  );
};
export default memo(GroceryHome);
