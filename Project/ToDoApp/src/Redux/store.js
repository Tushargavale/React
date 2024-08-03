import { configureStore } from '@reduxjs/toolkit'
import Auth from '../Redux/AuthSlice'
import Blogs from '../Redux/BlogSlice'

export const store = configureStore({
  reducer: {
    Auth,
    Blogs
  },
})