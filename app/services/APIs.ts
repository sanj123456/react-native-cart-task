import {constants} from '../core';
import {dispatch} from '../redux';
import {setIsLoading} from '../redux/modules/genericSlice';
import {setProducts} from '../redux/modules/productSlice';
import {get} from './request';

export const getProductsApi = () => {
  dispatch(setIsLoading(true));
  get(constants.allProducts)
    .then(async res => {
      dispatch(setProducts(res.products));
      dispatch(setIsLoading(false));
    })
    .catch(() => {
      dispatch(setIsLoading(false));
    });
};
