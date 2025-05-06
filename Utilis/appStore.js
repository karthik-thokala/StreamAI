

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utilis/userSlice.js";  
import moviesReducer from './temp.js';
import gptReducer from './gptslice.js';
import configReducer from './configSlice.js';


const appStore = configureStore({
    reducer: {
        user: userReducer, 
        movies:moviesReducer, 
        gpt:gptReducer,
        config:configReducer
    }
});

export default appStore;