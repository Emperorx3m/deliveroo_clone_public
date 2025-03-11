import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant_: [],
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {      
      state.restaurant_ = action.payload
      // state.restaurant_ = [...state.restaurant_, action.payload]
    },
    unSetRestaurant: (state, action) => {
      const indx = state.restaurant_.findIndex(item => item.id == action.payload.id)
      console.log("removeResront", indx)
      if(indx >= 0) state.restaurant_ = state.restaurant_.filter((item, index) => index !== indx);
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant, unSetRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state) => state.restaurant.restaurant_;
export const selectRestaurantrestaurant_WithId = (state, id) => state.restaurant.restaurant_.filter((item) => item.id === id)
export const restaurantTotal = (state) => state.restaurant.restaurant_.reduce((total, item) => total += item.price, 0)

export default restaurantSlice.reducer