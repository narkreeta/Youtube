import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./count/reducer"
import GituserReducer from "./gitapi/reducer"

const store = configureStore({
    reducer : {
        countReducer,
        GituserReducer
    }
})

export default store;