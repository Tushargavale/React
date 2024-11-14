import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../ThunkReducer/productAPI";

const initialState={
    name:"Products",
    catogiry:"All",
    products:[],
    page:1,
    length:null
}

export const productSlice=createSlice({
    initialState,
    name:"products",
    reducers:{
        getProduct:(state,action)=>{
            console.log("Get Productes")
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
        state.products=action.payload.data.products
        state.page= action.payload.data.page 
        state.length= action.payload.data.totalPages
          
        })
    }
})

export const {getProduct} =productSlice.actions
export default productSlice.reducer