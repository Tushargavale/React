import {configureStore} from '@reduxjs/toolkit'


import ThemeReducer from '../Feature/ThemeSlice.js'

export const store=configureStore({
    reducer:{
        Theme:ThemeReducer
    }
})


//export default store