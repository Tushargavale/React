import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Feature/CounterSlice.js'
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

