import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    error: null
}
const dataSlice = createSlice({
    name:'fetch',
    initialState,
    extraReducers: (builder) => {
        builder.addCase('pending', (state) => {
            state.loading = true
        }),
        builder.addCase('fulfilled', (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = null
        }),
        builder.addCase('rejected', (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
})
export default dataSlice.reducer;