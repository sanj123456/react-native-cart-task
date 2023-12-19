import {configureStore} from '@reduxjs/toolkit';
import genericSlice from './modules/genericSlice';
import productSlice from './modules/productSlice';
import favoriteSlice from './modules/favoriteSlice';
import cartSlice from './modules/cartSlice';

const store = configureStore({
  reducer: {
    generic: genericSlice,
    products: productSlice,
    favorite: favoriteSlice,
    cart: cartSlice,
  },
});
const dispatch = store.dispatch;
const getStore = store.getState;
const getWishList = store.getState;

export {dispatch, getStore, getWishList};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
