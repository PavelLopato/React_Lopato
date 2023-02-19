import { createSlice } from '@reduxjs/toolkit';

const initialState={
  data: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 

    dataAdd: (state,action) => {
      /*if (state.data.some(item => item.id === action.payload.id)){}
      else*/ state.data.push(action.payload);      
    },
 
    dataDelete: (state,action) => {
      state.data = state.data.filter(item => item.id !== action.payload.id); 
    },

    dataDeleteAll: (state, action) => {
      state.data = [];
    }
  },
});

export const { dataAdd, dataDelete, dataDeleteAll } = cartSlice.actions;
export default cartSlice.reducer;
