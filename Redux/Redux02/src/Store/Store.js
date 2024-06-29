import {configureStore} from '@reduxjs/toolkit'

import DataSlice from '../Feature/DataSlice.js'
import ThemeReducer from '../Feature/ThemeSlice.js'
import UserReducer from '../Feature/UserSlice.js'
export const store=configureStore({
    reducer:{
        Theme:ThemeReducer,
        User:UserReducer,
        Data:DataSlice
    }
})


//export default store