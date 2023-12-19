import {createSlice} from '@reduxjs/toolkit';

interface CartState {
  cartProducts: any;
}

const initialState: CartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductInCart = state.cartProducts.filter(
        (item: any) => item?.product?.id === action.payload.id,
      );

      let updateData = [];
      if (isProductInCart.length) {
        updateData = state.cartProducts.map((item: any) => {
          if (item.product.id === action.payload.id) {
            return {...item, noOfProducts: item.noOfProducts + 1};
          } else {
            return {...item};
          }
        });
      } else {
        updateData = [
          ...state.cartProducts,
          {product: action.payload, noOfProducts: 1},
        ];
      }
      return {
        ...state,
        cartProducts: [...updateData],
      };
    },
    removeFromCart: (state, action) => {
      const isOnlyOneProduct = state.cartProducts.filter(
        (item: any) =>
          item?.product?.id === action.payload.id && item.noOfProducts === 1,
      );

      let updateData = [];
      if (isOnlyOneProduct.length) {
        updateData = state.cartProducts.filter(
          (item: any) => item?.product?.id !== action.payload.id,
        );
      } else {
        updateData = state.cartProducts.map((item: any) => {
          if (item.product.id === action.payload.id) {
            return {...item, noOfProducts: item.noOfProducts - 1};
          } else {
            return {...item};
          }
        });
      }
      return {
        ...state,
        cartProducts: [...updateData],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {removeFromCart, addToCart} = cartSlice.actions;

export default cartSlice.reducer;
