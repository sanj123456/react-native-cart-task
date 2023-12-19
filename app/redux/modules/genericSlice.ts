import {createSlice} from '@reduxjs/toolkit';
import {LoaderParams} from '../../types/commonTypes';

interface GenericState {
  loader: LoaderParams;
}

const initialState: GenericState = {
  loader: {
    isLoading: false,
    loadingType: undefined,
  },
};

export const genericSlice = createSlice({
  name: 'generic',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.loader = {
        isLoading: action?.payload,
        loadingType: undefined,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {setIsLoading} = genericSlice.actions;

export default genericSlice.reducer;
