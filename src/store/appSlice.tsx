import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductI } from "../components/assets/interfaces";

export const fetchProducts = createAsyncThunk<Array<ProductI>, undefined, {rejectValue:string}>(
    'products/fetchProducts',
    async function(undefined, {rejectWithValue}){
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok){
            return rejectWithValue('oops')
        }
        const data = await response.json();
        return data;
    }
);

interface StateI {
    allProducts: Array<ProductI>
}

const initialState: StateI = {
    allProducts: []
}

const appSlice = createSlice({
    name: 'fakeStore',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
        })  
    }
})

export const {  } = appSlice.actions;
export default appSlice.reducer;

