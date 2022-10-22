import {createSlice} from "@reduxjs/toolkit"
import {GetGitUser} from "./uname"

const initialState = {
    responsedata : [],
    error : [],
    loading : false
}

const GitUserReducer = createSlice({
    name : "gituser",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(GetGitUser.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(GetGitUser.fulfilled,(state,action)=>{
            state.responsedata = action.payload
            state.loading = false
        })
        builder.addCase(GetGitUser.rejected,(state,action)=>{
            state.error = action.payload
            state.loading = false
        })
    }
})


export default GitUserReducer.reducer