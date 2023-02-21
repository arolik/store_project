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

export const fetchLogin = createAsyncThunk (
    'products/fetchLogin',
    async function(undefined, {rejectWithValue}) {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        if(!response.ok){
            return rejectWithValue('ooops')
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
    loading: boolean,
    login: boolean,
    userToken: string
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
    loading: false,
    login: false,
    userToken: ''
}

const appSlice = createSlice({
    name: 'fakeStore',
    initialState,
    reducers: {
        changeStatusLogin (state) {
            state.login = false;
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
            state.userToken = action.payload.token;
            state.login = true;
        })
    }
})

export const { changeStatusLogin } = appSlice.actions;
export default appSlice.reducer;

