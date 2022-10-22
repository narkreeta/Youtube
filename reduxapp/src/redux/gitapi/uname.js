import {createAsyncThunk} from "@reduxjs/toolkit";

export const GetGitUser = createAsyncThunk("gituser/fetchid",async(uname,thunkAPI)=>{
    const gitresp = await fetch(`https://api.github.com/users/${uname}`).then(res => res.json())
    return gitresp
})