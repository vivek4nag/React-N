// we are building the store using redux

import { configureStore } from '@reduxjs/toolkit'; //  function provided by the Redux Toolkit (RTK), which simplifies the setup of the Redux store.configureStore is related to creation of store inside redux hence that was imported from redux toolkit

import cartReducer from './cartSlice';

const appStore = configureStore({
    // below reducer is responsible for modifying the redux store, for each slice inside store, we are having diff. reducers. so bahar wala reducer is for whole store & inside that we are having small reducer for each slice eg. cartReducer
    // also note here it is one big reducer(singulaar term) containing multiple reducers inside it
    //in cartSlice, there are multiple reducers (plural)
    reducer : {
        cart : cartReducer,
    },
});

export default appStore