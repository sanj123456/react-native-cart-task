import {createSlice} from '@reduxjs/toolkit';

interface FavoriteState {
  favorite: any[];
}

const initialState: FavoriteState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteItem: (state, action) => {
      const index = state.favorite.findIndex(
        ele => ele.id === action.payload.id,
      );
      if (index > -1) {
        state.favorite.splice(index, 1);
      } else {
        state.favorite = [action.payload, ...state.favorite];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {setFavoriteItem} = favoriteSlice.actions;

export default favoriteSlice.reducer;
