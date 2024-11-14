import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Feture/userSlice'
import productSlice from './Feture/productSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    products:productSlice
  },
})