import {createSlice} from '@reduxjs/toolkit'

export const contaSlice = createSlice({
    name: "contas",
    initialState: {value: [{
        id: '',
        nome: 'teste'
    }]},
    reducers: {
        addUser: (state, action) => {

        }
    }
})

export default contaSlice.reducer;