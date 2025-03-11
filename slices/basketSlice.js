import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const indx = state.items.findIndex(item => item.id == action.payload.id)
      console.log("removeBaskt", indx)
      if(indx >= 0) state.items = state.items.filter((item, index) => index !== indx);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id)
export const basketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer