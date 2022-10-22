import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    value : 42
}


const countReducer = createSlice({
    name : "count",
    initialState,
    reducers : {
        add : (state,action) => {
            if(action.payload){
                state.value += action.payload
            }else{
                state.value++
            }
        },
        sub : (state,action) => {
            if(action.payload){
                state.value -= action.payload
            }else{
                state.value--
            }
        }
    }
})

export const {add,sub} = countReducer.actions

export default countReducer.reducer