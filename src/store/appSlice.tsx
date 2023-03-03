import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { CartProductI, CountProductI, ProductI, TokenI } from "../components/assets/interfaces";

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

export const fetchCategories = createAsyncThunk<Array<string>, undefined, {rejectValue:string}> (
    'products/fetchCategories',
    async function(undefined, {rejectWithValue}){
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if(!response.ok){
            return rejectWithValue('oops')
        }
        const data = await response.json();
        return data;
    }
);

export const fetchMensProducts = createAsyncThunk<Array<ProductI>, undefined, {rejectValue:string}> (
    'products/fetchMensProducts',
    async function(undefined, {rejectWithValue}){
        const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`);
        if(!response.ok){
            return rejectWithValue('oops')
        }
        const data = await response.json();
        return data;
    }
);

export const fetchWomensProducts = createAsyncThunk<Array<ProductI>, undefined, {rejectValue:string}> (
    'products/fetchWomensProducts',
    async function(undefined, {rejectWithValue}){
        const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing`);
        if(!response.ok){
            return rejectWithValue('ooops')
        }
        const data = await response.json();
        return data;
    }
);

export const fetchJeweleryProducts = createAsyncThunk<Array<ProductI>, undefined, {rejectValue:string}> (
    'products/fetchJeweleryProducts',
    async function(undefined, {rejectWithValue}){
        const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
        if(!response.ok){
            return rejectWithValue('ooops')
        }
        const data = await response.json();
        return data;
    }
);

export const fetchElectronicsProducts = createAsyncThunk<Array<ProductI>, undefined, {rejectValue:string}> (
    'products/fetchElectronicsProducts',
    async function(undefined, {rejectWithValue}){
        const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
        if(!response.ok){
            return rejectWithValue('ooops')
        }
        const data = await response.json();
        return data;
    }
);

export const fetchLogin = createAsyncThunk<TokenI, {userName: string, userPassword: string}, {rejectValue:string}> (
    'products/fetchLogin',
    async function({userName, userPassword}, {rejectWithValue}) {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: userName,
                password: userPassword
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(!response.ok){
            return rejectWithValue('incorrect login or password')
        }
        const data = await response.json();
        return data;
    }
);

interface StateI {
    allProducts: Array<ProductI>,
    categories: {
        namesCategories: Array<string>,
        mensCategory: Array<ProductI>,
        womensCategory: Array<ProductI>,
        jeweleryCategory: Array<ProductI>,
        electronicsCategory: Array<ProductI>
    },
    cart: Array<CartProductI>,
    loading: boolean,
    isLogin: boolean,
    errorMessage: string | undefined
}

const initialState: StateI = {
    allProducts: [],
    categories: {
        namesCategories: [],
        mensCategory: [],
        womensCategory: [],
        jeweleryCategory: [],
        electronicsCategory: []
    },
    cart: [],
    loading: false,
    isLogin: true,
    errorMessage: ''
}

const appSlice = createSlice({
    name: 'fakeStore',
    initialState,
    reducers: {
        changeStatusLogin (state) {
            state.isLogin = false;
        },
        setCart (state, action: PayloadAction<CartProductI>) {
            state.cart.push({product: action.payload.product, sum: action.payload.sum, count: action.payload.count, id: action.payload.id});
        },
        changeCountCartProduct (state, action: PayloadAction<CountProductI>) {
            let elem = state.cart.find((p) => p.id === action.payload.id );
            if(elem){
                elem.count = action.payload.count;
                elem.sum = action.payload.sum;
            }
            
        },
        remoweCartProduct (state, action) {
            state.cart = state.cart.filter((p) => p.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loading = false
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories.namesCategories = action.payload;   
        })
        .addCase(fetchMensProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchMensProducts.fulfilled, (state, action) => {
            state.categories.mensCategory = action.payload;
            state.loading = false;
        })
        .addCase(fetchWomensProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchWomensProducts.fulfilled, (state, action) => {
            state.categories.womensCategory = action.payload;
            state.loading = false;
        })
        .addCase(fetchJeweleryProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchJeweleryProducts.fulfilled, (state, action) => {
            state.categories.jeweleryCategory = action.payload;
            state.loading = false;
        })
        .addCase(fetchElectronicsProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchElectronicsProducts.fulfilled, (state, action) => {
            state.categories.electronicsCategory = action.payload;
            state.loading = false;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            localStorage.setItem('userToken', action.payload.token);
            state.isLogin = true;
            state.errorMessage = "";
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.errorMessage = action.payload;
        })
    }
})

export const { changeStatusLogin, setCart, changeCountCartProduct, remoweCartProduct } = appSlice.actions;
export default appSlice.reducer;

