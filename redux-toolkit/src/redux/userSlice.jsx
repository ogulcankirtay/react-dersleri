import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    users: [],
    loading: false,
}

export const getUsers = createAsyncThunk(
    'user',
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data;
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //http harici işlemlerde kullanılır! 
    },
    extraReducers: (builder) => {
        //http isteklerinde kullanılır!;
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
            console.log("state" + state)
        })

    }
})

export const { } = userSlice.actions
export const userReducer = userSlice.reducer