import {createSlice} from '@reduxjs/toolkit'

import {UsersData} from '../Fakedata'

export const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {

        }
    }
})

export default userSlice.reducer;