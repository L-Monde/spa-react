import { createSlice } from '@reduxjs/toolkit'

export const wordSlice = createSlice({
    name: 'findWord',
    initialState: {
        value: ''
    },
    reducers: {
        modify: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { modify } = wordSlice.actions

export default wordSlice.reducer