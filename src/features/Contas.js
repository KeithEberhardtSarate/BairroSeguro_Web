import {createSlice} from '@reduxjs/toolkit'

export const contaSlice = createSlice({
    name: "contas",
    initialState: {value: [{
        id: '1',
        nome: 'teste'
    },
    {
        id: '2',
        nome: 'teste1'
    },
    {
        id: '3',
        nome: 'teste2'
    }]},
    reducers: {
        addUser: (state, action) => {

        }
    }
})

export default contaSlice.reducer;